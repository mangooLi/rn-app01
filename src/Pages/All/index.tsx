

import * as React from 'react';
import { View ,FlatList ,ScrollView,NativeSyntheticEvent,NativeScrollEvent ,LayoutChangeEvent,DeviceEventEmitter} from 'react-native';
import {observer} from 'mobx-react';



import { getInformationFlow,getBanners,getRandomReportProduct,InformationFlowType} from '../../api'

import ArticleBrief from '../../Common/ArticleBrief';
import Banner from './Banner';

import DataLabCardContainer from './DataLabContainer';
import {homeStyle} from './style';


import { debounce ,MyStyleSheetCreate, noop, WindowHeight, getSize} from '../../utils';
import Report, {ReportProps} from '../../Common/Report'
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import HomeContainer from '../Home/HomeContainer';
import LongList from '../../Common/LongList';


@observer
class AllPage extends LongList< (DataDiscoverItem|DataLabItem|DataHeroItem|DataFiftyItem),NavigationInjectedProps >{

    // store = new AllPageModel()
   
    

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

    apiFn = (page:number)=>{
        return getInformationFlow({page,per:20})
    }



    componentWillMount(){
        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:0})
        })
        this.props.navigation.addListener('willBlur',()=>{
            DeviceEventEmitter.emit('PageExpand')
        })
        // this.store.init({limit:true}); 
        this.init();
        this.style=[homeStyle.page_container,{height:WindowHeight-getSize(89)}];
    }

    head(){
        const {banners}=this.state;
        if(banners){

            return <Banner banners={banners }/>
        }else{
            return <View/>
        }
    }

    init(){
        super.init();
        Promise.all([getBanners(),getRandomReportProduct()]).then(values=>{
            this.setState({loading:false,netError:false })
          
            // handle get banner
            if(values[0].data){
                this.setState({
                    banners:(values[0].data as {data:BannerItem[]}).data
                })
                // this.banners = (values[0].data as {data:BannerItem[]}).data
            }

            // handle getRandomReportProduct
            
            if(values[1].data){
                this.setState({
                    report_product:(values[1].data as {data:ReportProductItem[]}).data
                })
                // this.report_product = (values[1].data as {data:ReportProductItem[]}).data
            }
        }).catch(()=>{
            this.setState({loading:false,netError:true})

        })
    }

    // _onItemLayout(e:LayoutChangeEvent,index:number){
    //     this.layout[index]=e.nativeEvent.layout.height;
    // }

    render_item= (item:(DataDiscoverItem|DataLabItem|DataHeroItem|DataFiftyItem),index:number):JSX.Element=>{

        const {report_product}=this.state;
        return (<View onLayout={(e)=>this._onItemLayout(e,index)}>  
                  {item._type===InformationFlowType.data_lab_information
            ?( <DataLabCardContainer {...item as DataLabItem}/>)
            :<ArticleBrief {...item} />}
                {index ===6?<Report {...{list:(report_product as ReportProductItem[])}} />:<View/>}
            </View>)
    }

   

    


    // render(){
    //     const {banners, informations,report_product,showHead, loading,netError,initialized}=this.store;
    

    //     return (

    //         <AllPageLongList 
    //             Head = {<Banner banners={banners}/>}

    //             render_item={({item,index})=>{
    //                 return (<View onLayout={(e)=>this._onItemLayout(e,index)}>  
    //                         {item._type===InformationFlowType.data_lab_information
    //                     ?( <DataLabCardContainer {...item as DataLabItem}/>)
    //                     :<ArticleBrief {...item} show/>}
    //                         {index ===6?<Report {...{list:report_product}} />:<View/>}
    //                     </View>)
    //             }}
    //             apiFn={(page:number)=>{
    //                 return getInformationFlow({page,per:20})
    //             }} 
    //             style={[homeStyle.page_container,{height:WindowHeight-getSize(89)}]}
    //         />

    //         // <View style={[homeStyle.page_container,{height:WindowHeight-getSize(89)}]} ref={c=>this.cn=c}>
    //         // {initialized ?
           
    //         //     <FlatList
    //         //         ref={(c:FlatList<any>)=>this.flatList=c}
    //         //         refreshControl={
    //         //             <SmartRefreshControl 
    //         //                 ref = {(c:any)=>this.srf=c}
    //         //                 headerHeight={getSize(40)}
    //         //                 HeaderComponent={   
    //         //                     <AnyHeader >
    //         //                         <FooterLoading loading={true} netError={netError}/>
    //         //                     </AnyHeader>}
                                
    //         //                 onRefresh={()=>{
    //         //                     this.store.loadPreData().then(res=>{

    //         //                             this.srf.finishRefresh();
    //         //                     })
    //         //                 }}/>
    //         //         }
    //         //         onScroll={this._onScroll}
    //         //         data={informations}
    //         //         ListHeaderComponent={
    //         //             <View>
    //         //                 {showHead? <Banner banners={banners}/>:<View/>}
    //         //             </View>
    //         //         }

    //         //         renderItem={({item,index})=>{
    //         //             return (<View onLayout={(e)=>this._onItemLayout(e,index)}>  
    //         //                     {item._type===InformationFlowType.data_lab_information
    //         //                 ?( <DataLabCardContainer {...item as DataLabItem}/>)
    //         //                 :<ArticleBrief {...item}/>}
    //         //                     {showHead && index ===6?<Report {...{list:report_product}}/>:<View/>}
    //         //                 </View>)
    //         //         }}
    //         //         keyExtractor={item => item.id+''}
    //         //         removeClippedSubviews
    //         //         // getItemLayout={(data, index) => (
    //         //         //     {length: 107, offset: 107 * index, index}
    //         //         //   )}
    //         //         onEndReached={()=>this.store.loadMore()}
    //         //         onEndReachedThreshold={0.2}
    //         //         scrollEventThrottle={500}
    //         //         ListFooterComponent={<FooterLoading loading ={loading} netError={netError}/>}
    //         //     />
    //         // // </ScrollView>
    //         // :loading?<Loading />:netError?<NetError reload={()=>this.store.reload()}/>:<View/>}
    //         // </View>
    //     )
    // }
}

const ExportAllPage = withNavigation<{}>(AllPage)
export default ExportAllPage;


export class AllPageWithAnimate extends React.Component {

    render (){

        return (<HomeContainer>
            <ExportAllPage />
        </HomeContainer>)
    }
}


