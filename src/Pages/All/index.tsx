

import * as React from 'react';
import { View ,FlatList ,ScrollView,NativeSyntheticEvent,NativeScrollEvent,DeviceEventEmitter} from 'react-native';
import { getInformationFlow,getBanners,getRandomReportProduct,InformationFlowType} from '../../api'

import ArticleBrief from '../../Common/ArticleBrief';
import Banner from './Banner';

import DataLabCardContainer from './DataLabContainer';
import {homeStyle} from './style';

import { debounce ,MyStyleSheetCreate} from '../../utils';
import Report, {ReportProps} from '../../Common/Report'
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';


interface HomeState{
    banners:BannerItem[],
    report_product:ReportProductItem[],
    information:DataDiscoverItem[]|DataLabItem[]|DataHeroItem[]|DataFiftyItem[],
    refreshing:boolean,
    loading:boolean,
    netError:boolean
}

class AllPage extends React.Component<NavigationInjectedProps>{
    preInfo:any[]=[]
    loadInfo:() => void;
    pageToLoad:number=1;
    totalPage:number =1;
    per:number=20;
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
       loading:false,
       netError:false

   }
   
   handleLoadError=()=>{
       this.setState({
           loading:false,
           netError:true
       })
   }
   beforeLoad(){
       this.setState({
        loading:true,
        netError:false
       })
   }
   handleLoadDone(){
       this.setState({
           loading:false,
           netError:false
       })
   }
   _loadinfo():Promise<any>{

       if( this.pageToLoad>this.totalPage)return Promise.resolve([]);
       return getInformationFlow({page:this.pageToLoad,per:this.per}).then(res=>{
           if(res.data){
               let {information}=this.state;
               this.setState({information:[...information,...res.data.data]});
                this.totalPage=res.data.meta.total_page;
                this.pageToLoad+=1;
           }
       })
   }


    componentWillMount(){
        this.loadInfo=debounce(this._loadinfo,1000)
        this.beforeLoad();

        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:0})
        })
        

        Promise.all([this._loadinfo(),getBanners(),getRandomReportProduct()]).then(values=>{
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
        // this._loadinfo().then(()=>{
        //     let information=this.state.information;
        //     this.preInfo= information.splice(0,7)
        //     this.setState({information})
        // }).catch(this.handleLoadError)
        // getBanners().then(res=>{
        //     if(res.data){
        //         this.setState({banners:res.data.data})
        //     }
        // }).catch(this.handleLoadError)
        // getRandomReportProduct().then(res=>{
        //     if(res.data){
        //         this.setState({report_product:res.data.data})
        //     }
        // }).then(this.handleLoadError)
    }

    handleScroll(e:NativeSyntheticEvent<NativeScrollEvent> |undefined){
        if(!e){return}
        const offsetY = e.nativeEvent.contentOffset.y; //滑动距离
        const contentSizeHeight = e.nativeEvent.contentSize.height; //scrollView contentSize高度
        const oriageScrollHeight = e.nativeEvent.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight-20){
            // 滑动到底部
            this.loadInfo()
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
        const {banners, information,report_product,loading,netError}=this.state;
        
        return (
            <View style={homeStyle.page_container} ref={c=>this.cn=c}>
            {(!loading && !netError)? <ScrollView  
                // refreshControl={
                //     <RefreshControl
                //         refreshing={false}
                //         onRefresh={this._onRefresh}
                //         colors={['#f00','#0f0','#00f']}
                //         // progressBackgroundColor='#f0f'
                //         enabled={true}
                //         progressViewOffset={20}
                //         // tintColor='#0ff'    
                //         title='下拉刷新'
                //     />
                // }
                onScroll={(e)=>this.handleScroll(e)}
                testID='homePage'>
                <Banner banners={banners}/>

                <View style={homeStyle.preInfo}>
                    {this.preInfo?this.preInfo.map(item=>{
                        return (item._type===InformationFlowType.data_lab_information?<DataLabCardContainer key={item.id}  {...item as DataLabItem}/>:<ArticleBrief key={item.id} {...item}/>)
                    }):null}
                </View>
                <Report {...{list:report_product}}/>

                <FlatList
                    data={information}
                    renderItem={({item})=>{
                        return (item._type===InformationFlowType.data_lab_information
                            ?( <DataLabCardContainer {...item as DataLabItem}/>)
                            :<ArticleBrief {...item}/>)
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                />
            </ScrollView>:netError?<NetError />:<Loading/> }
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


