import * as React from 'react';
import { View ,Text,FlatList,DeviceEventEmitter,NativeSyntheticEvent,NativeScrollEvent} from 'react-native';
import {SmartRefreshControl,AnyHeader} from 'react-native-smartrefreshlayout';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import {get} from '../../utils';





import DataDiscoverModel from './model';
import ArticleBrief from '../../Common/ArticleBrief';

import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';
import FooterLoading from '../../Common/FooterLoading';

import {observer} from 'mobx-react';
import {dataDiscoverStyle} from './style';
import Tags from './Tags';
import { WindowHeight, getSize, debounce } from '../../utils';
import { toJS } from 'mobx';


@observer
class DataDiscover extends React.Component<NavigationInjectedProps>{



    store = new DataDiscoverModel();

    srf:any;
    flatList:FlatList<any>;
    scrollTimeStamp:number = 0;
    contentOffsetY:number = 0;

    _onStartAlreadyCalled:boolean =false;

    componentWillMount(){

        this.store.loadData();
        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:1})
        })



    }
    render(){
        const {informations,loading, netError,initialized} =this.store;
        return (
        <View>
        { initialized? <View style={[dataDiscoverStyle.container,{height:WindowHeight-getSize(89)}]}>

            <Tags store={this.store}/>
            <FlatList 

                ref = {(c:FlatList<any>)=>this.flatList=c}
                refreshControl={
                    <SmartRefreshControl 
                        ref = {(c:any)=>this.srf=c}
                        headerHeight={getSize(40)}
                        HeaderComponent={   
                            <AnyHeader >

                                <FooterLoading loading={true} netError={netError}/>
                            </AnyHeader>}
                        onRefresh={()=>{
                           console.log('loaddata');
                           this.store.loadPreData().then(res=>{
                                this.srf.finishRefresh();
                           }) 
                        }}
                    />
                }
                onEndReached={()=>this.store.loadMore()}
                onEndReachedThreshold={0.2}

                style={dataDiscoverStyle.flat_list}
                data={informations}
                renderItem={({item})=>{
                    return <ArticleBrief {...item}  />
                }}
                keyExtractor={item => item.id+''}
                ListFooterComponent={  <FooterLoading loading={loading && informations.length>0} netError={netError}/>}
            />

        </View>:loading?<Loading />:netError?<NetError />:<View/>}
        </View>
        )
    }
}

const ExportDataDiscover =  withNavigation<{}>(DataDiscover);
export default ExportDataDiscover;


export class DataDiscoverWithAnimate extends React.Component {

    render (){

        return (<HomeContainer>
            <ExportDataDiscover/>
        </HomeContainer>)
    }
}