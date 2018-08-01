

import * as React from 'react';
import { View ,FlatList ,ScrollView,NativeSyntheticEvent,NativeScrollEvent} from 'react-native';
import { getInformationFlow,getBanners,getRandomReportProduct,BannerItem,DataDiscoverItem,DataLabItem,DataHeroItem,DataFiftyItem,ReportProductItem,InformationFlowType} from '../../api'
import ArticleBrief from './ArticleBrief';
import Banner from './Banner';
// import DataLabCard from './DataLabCard';
import DataLabCardContainer from './DataLabContainer';
import styles from '../../style';
// import {homeStyle, dataLabStyle} from './style'
import { debounce } from '../../utils';
import Report, {ReportProps} from './Report'
import { NavigationInjectedProps } from 'react-navigation';





interface HomeState{
    banners:BannerItem[],
    report_product:ReportProductItem[],
    information:DataDiscoverItem[]|DataLabItem[]|DataHeroItem[]|DataFiftyItem[]
}

export default class HomePage extends React.Component<NavigationInjectedProps>{
    preInfo:any[]=[]
    loadInfo:() => void;
    pageToLoad:number=1;
    totalPage:number =1;
    per:number=20;

    static navigationOptions={
        // tabBarVisible:false,
        // header:null    //隐藏顶部导航栏
    }

   
   state:HomeState={
       banners:[],
       report_product:[],
       information:[]
   }

   _loadinfo():Promise<any>{
       console.log('loading info')
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
        this._loadinfo().then(()=>{


            let information=this.state.information;
            this.preInfo= information.splice(0,7)
            this.setState({information})


        });
        getBanners().then(res=>{
            if(res.data){
                this.setState({banners:res.data.data})
            }
        })
        getRandomReportProduct().then(res=>{
            if(res.data){
                this.setState({report_product:res.data.data})
            }
        })
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

    

    render(){
        const {banners, information,report_product}=this.state;
        return (
            <View>
            <ScrollView  
                onScroll={(e)=>this.handleScroll(e)}
                testID='homePage'>
                <Banner banners={banners}/>

                <View>
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
            </ScrollView>
            </View>
        )
    }
}

