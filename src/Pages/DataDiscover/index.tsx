import * as React from 'react';
import { View ,Text,FlatList,ScrollView,NativeScrollEvent,DeviceEventEmitter} from 'react-native';
// import {SmartRefreshControl,ClassicsHeader,StoreHouseHeader,DefaultHeader} from 'react-native-smartrefreshlayout';
import DataDiscoverModel from './model';
import ArticleBrief from '../../Common/ArticleBrief';

import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';
import FooterLoading from '../../Common/FooterLoading';

import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import {observer} from 'mobx-react';
import {dataDiscoverStyle} from './style';
import Tags from './Tags';
import { WindowHeight, getSize } from '../../utils';


@observer
class DataDiscover extends React.Component<NavigationInjectedProps>{



    store = new DataDiscoverModel();

    // srf:any;

    componentWillMount(){

        this.store.loadData();
        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:1})
        })

    }

    render(){
        const {informations,loading,netError,initialized} =this.store;
        return (
        <View>
        { initialized? <View style={[dataDiscoverStyle.container,{height:WindowHeight-getSize(89)}]}>

            <Tags store={this.store}/>
            <FlatList 
                // refreshControl={
                //     <SmartRefreshControl 
                //         ref = {(c:any)=>this.srf=c}
                //         headerHeight={30}
                //         HeaderComponent={<Text>&nbsp;</Text>}
                //         onRefresh={()=>{
                //            console.log('loaddata');
                //            this.store.loadPreData();
                //            this.srf.finishRefresh()
                //         }}
                //     />
                // }
                style={dataDiscoverStyle.flat_list}
                data={informations}
                renderItem={({item})=>{
                    return <ArticleBrief {...item}  />
                }}
                onEndReached={()=>this.store.loadData()}
                onEndReachedThreshold={0.2}
                removeClippedSubviews
                keyExtractor={item => item.id+''}
                getItemLayout={(data, index) => (
                    {length: 107, offset: 107 * index, index}
                  )}
                ListFooterComponent={ <FooterLoading loading={loading} netError={netError}/>}
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