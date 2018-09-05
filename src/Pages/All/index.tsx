

import * as React from 'react';
import { View ,FlatList ,ScrollView,NativeSyntheticEvent,NativeScrollEvent,DeviceEventEmitter} from 'react-native';
import { getInformationFlow,getBanners,getRandomReportProduct,InformationFlowType} from '../../api'

import ArticleBrief from '../../Common/ArticleBrief';
import Banner from './Banner';

import DataLabCardContainer from './DataLabContainer';
import {homeStyle} from './style';

import { debounce ,MyStyleSheetCreate, noop, WindowHeight, getSize} from '../../utils';
import Report, {ReportProps} from '../../Common/Report'
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';
import FooterLoading from '../../Common/FooterLoading';


interface HomeState{
    banners:BannerItem[],
    report_product:ReportProductItem[],
    information:DataDiscoverItem[]|DataLabItem[]|DataHeroItem[]|DataFiftyItem[],
    refreshing:boolean,
    loading:boolean,
    netError:boolean,
    // initializing:boolean,
    initialized:boolean

}

class AllPage extends React.Component<NavigationInjectedProps>{
    preInfo:any[]=[]
    loadInfo:() => void;
    pageToLoad:number=1;
    totalPage:number =1;
    per:number=10;
    cn:any;
    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

   
   state:HomeState={
       banners:[],
       report_product:[],
       information:[],
       refreshing:false,
        initialized:false,

       loading:false,
       netError:false,

   }
   
   handleLoadError=()=>{
       this.setState({
           loading:false,
           netError:true,

       })
   }
   beforeLoad(){

       this.setState({
        loading:true,
        netError:false,
       })
   }
   handleLoadDone(){
       this.setState({
           loading:false,
           netError:false,
       })
   }
   _loadinfo():Promise<any>{
       if(this.state.loading){
           return Promise.resolve()
       }
        this.beforeLoad()
       if( this.pageToLoad>this.totalPage)return Promise.resolve([]);
       return getInformationFlow({page:this.pageToLoad,per:this.per}).then(res=>{
           this.handleLoadDone()
           if(res.data){
               let {information}=this.state;
               this.setState({information:[...information,...res.data.data]});
                this.totalPage=res.data.meta.total_page;
                this.pageToLoad+=1;
           }
       }).catch(this.handleLoadError)
   }


    componentWillMount(){
        this.loadInfo=debounce(this._loadinfo,1000)

        this.beforeLoad();
        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:0})
        })
        this.props.navigation.addListener('willBlur',()=>{
            DeviceEventEmitter.emit('PageExpand')
        })
        

        Promise.all([this._loadinfo(),getBanners(),getRandomReportProduct()]).then(values=>{
            this.setState({initialized:true})
            this.handleLoadDone()
            // handle load info 
            let information=this.state.information;
            this.preInfo= information.splice(0,7)
            this.setState({information});
            // handle get banner
            if(values[1].data){
                this.setState({banners:(values[1].data as {data:BannerItem[]}).data})
            }

            // handle getRandomReportProduct
            if(values[2].data){
                this.setState({report_product:(values[2].data as {data:ReportProductItem[]}).data})
            }
        }).catch(this.handleLoadError)

    }

    handleScroll(e:NativeSyntheticEvent<NativeScrollEvent> |undefined){
        if(!e){return}
        const offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        const contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        const oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight-20){
            // 滑动到底部
            this._loadinfo()
        }

    }

    _onRefresh=()=>{
        this.setState({refreshing:true});
        // console.log('refrehing');
        this.cn.setNativeProps({
            style:{
                marginTop:80
            }
        })
        setTimeout(()=>{
            this.setState({refreshing:false});
            this.cn.setNativeProps({
                style:{
                    marginTop:0
                }
            })
        },3000)
    }
    

    render(){
        const {banners, information,report_product,loading,netError,initialized}=this.state;
        
        return (
            <View style={[homeStyle.page_container,{height:WindowHeight-getSize(89)}]} ref={c=>this.cn=c}>
            {initialized ?
            // <ScrollView  
            //     onScroll={(e)=>this.handleScroll(e)}
            //     testID='homePage'>
            //     <Banner banners={banners}/>

            //     <View style={homeStyle.preInfo}>
            //         {this.preInfo?this.preInfo.map(item=>{
            //             return (item._type===InformationFlowType.data_lab_information?<DataLabCardContainer key={item.id}  {...item as DataLabItem}/>:<ArticleBrief key={item.id} {...item}/>)
            //         }):null}
            //     </View>
            //     <Report {...{list:report_product}}/>

                <FlatList
                    data={information}
                    // onScroll={(e)=>this.handleScroll(e)}
                    ListHeaderComponent={
                        <View>
                            <Banner banners={banners}/>

                            <View style={homeStyle.preInfo}>
                                {this.preInfo?this.preInfo.map(item=>{
                                    return (item._type===InformationFlowType.data_lab_information?<DataLabCardContainer key={item.id}  {...item as DataLabItem}/>:<ArticleBrief key={item.id} {...item}/>)
                                }):null}
                            </View>
                            <Report {...{list:report_product}}/>
                        </View>
                    }

                    // onViewableItemsChanged={({viewableItems,changed})=>{
                    //     console.log(viewableItems,changed)
                    // }}
                    // viewabilityConfig={
                    //     {
                    //         viewAreaCoveragePercentThreshold:20
                    //     }
                    // }

                    renderItem={({item})=>{
                        return (item._type===InformationFlowType.data_lab_information
                            ?( <DataLabCardContainer {...item as DataLabItem}/>)
                            :<ArticleBrief {...item}/>)
                    }}
                    keyExtractor={item => item.id+''}
                    removeClippedSubviews
                    getItemLayout={(data, index) => (
                        {length: 107, offset: 107 * index, index}
                      )}
                    onEndReached={()=>this._loadinfo()}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={<FooterLoading loading ={loading} netError={netError}/>}
                />
            // </ScrollView>
            :loading?<Loading />:netError?<NetError/>:<View/>}
            </View>
        )
    }
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


