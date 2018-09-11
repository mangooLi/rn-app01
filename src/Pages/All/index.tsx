

import * as React from 'react';
import { View ,FlatList ,ScrollView,NativeSyntheticEvent,NativeScrollEvent,DeviceEventEmitter} from 'react-native';
import {observer} from 'mobx-react';
import { SmartRefreshControl ,AnyHeader} from 'react-native-smartrefreshlayout';


import { getInformationFlow,getBanners,getRandomReportProduct,InformationFlowType} from '../../api'
import AllPageModel from './model';
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
import { toJS } from 'mobx';



@observer
class AllPage extends React.Component<NavigationInjectedProps>{

    store = new AllPageModel()
   
    cn:any;
    srf:any;
    last:any;

    flatList:FlatList<any>
    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }



    componentWillMount(){



        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:0})
        })
        this.props.navigation.addListener('willBlur',()=>{
            DeviceEventEmitter.emit('PageExpand')
        })
        this.store.init({limit:true}); 

    }

    


    render(){
        const {banners, informations,report_product,showHead, loading,netError,initialized}=this.store;
        
        console.log('render', toJS(informations),toJS(banners))
        // console.log('showhead',showHead)
        return (
            <View style={[homeStyle.page_container,{height:WindowHeight-getSize(89)}]} ref={c=>this.cn=c}>
            {initialized ?
           
                <FlatList
                    ref={(c:FlatList<any>)=>this.flatList=c}
                    refreshControl={
                        <SmartRefreshControl 
                            ref = {(c:any)=>this.srf=c}
                            headerHeight={getSize(40)}
                            HeaderComponent={   
                                <AnyHeader >
                                    <FooterLoading loading={true} netError={netError}/>
                                </AnyHeader>}
                                
                            onRefresh={()=>{
                                this.store.loadPreData().then(res=>{

                                        this.srf.finishRefresh();
                                })
                            }}/>
                    }
                    data={informations}
                    ListHeaderComponent={
                        <View>
                            {showHead? <Banner banners={banners}/>:<View/>}
                        </View>
                    }

                    renderItem={({item,index})=>{
                        return (<View>  
                                {item._type===InformationFlowType.data_lab_information
                            ?( <DataLabCardContainer {...item as DataLabItem}/>)
                            :<ArticleBrief {...item}/>}
                                {showHead && index ===6?<Report {...{list:report_product}}/>:<View/>}
                            </View>)
                    }}
                    keyExtractor={item => item.id+''}
                    removeClippedSubviews
                    // getItemLayout={(data, index) => (
                    //     {length: 107, offset: 107 * index, index}
                    //   )}
                    onEndReached={()=>this.store.loadMore()}
                    onEndReachedThreshold={0.2}
                    scrollEventThrottle={500}
                    ListFooterComponent={<FooterLoading loading ={loading} netError={netError}/>}
                />
            // </ScrollView>
            :loading?<Loading />:netError?<NetError reload={()=>this.store.reload()}/>:<View/>}
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


