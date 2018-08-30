import * as React from 'react';
import { View ,Text,FlatList,ScrollView,NativeScrollEvent} from 'react-native';
import DataDiscoverModel from './model';
import ArticleBrief from '../../Common/ArticleBrief';

import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';

import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import {observer} from 'mobx-react';
import {dataDiscoverStyle} from './style';
import Tags from './Tags';


@observer
class DataDiscover extends React.Component<NavigationInjectedProps>{



    store = new DataDiscoverModel();


    componentWillMount(){

        this.store.loadData();

    }
    componentWillUpdate(nextprop:any){
        console.log('datadiscover', nextprop)
    }



    render(){
        const {informations,loading,netError} =this.store;
        return (
        <View>
        {(!loading && !netError)? <View style={dataDiscoverStyle.container}>

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
                ListFooterComponent={<View style={dataDiscoverStyle.footer}/>}
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