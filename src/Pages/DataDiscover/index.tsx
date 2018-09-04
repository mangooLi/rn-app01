import * as React from 'react';
import { View ,Text,FlatList,ScrollView,NativeScrollEvent,DeviceEventEmitter} from 'react-native';
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


    componentWillMount(){

        this.store.loadData();
        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:1})
        })

    }

    render(){
        const {informations,loading,netError} =this.store;
        return (
        <View>
        {(!loading && !netError)? <View style={[dataDiscoverStyle.container,{height:WindowHeight-getSize(89)}]}>

            <Tags store={this.store}/>
            <FlatList 
                style={dataDiscoverStyle.flat_list}
                data={informations}
                renderItem={({item})=>{
                    return <ArticleBrief {...item}  />
                }}
                onEndReached={()=>this.store.loadData()}
                onEndReachedThreshold={0.1}
                keyExtractor={(index) => String(index)+String(Math.random())}
                ListFooterComponent={<FooterLoading loading={loading}/>}
            />


        </View>:netError?<NetError />:<Loading/>}
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