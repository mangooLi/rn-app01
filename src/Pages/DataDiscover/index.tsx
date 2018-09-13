import * as React from 'react';
import { View ,Text,FlatList,DeviceEventEmitter,} from 'react-native';

import { NavigationInjectedProps, withNavigation } from 'react-navigation';


import {getDataDiscoverInformations} from '../../api';



import DataDiscoverModel from './model';
import ArticleBrief from '../../Common/ArticleBrief';

import HomeContainer from '../Home/HomeContainer';


import {observer} from 'mobx-react';
import {dataDiscoverStyle} from './style';
import Tags from './Tags';
import { WindowHeight, getSize, debounce } from '../../utils';
import LongList from '../../Common/LongList';



class DataDiscoverList extends LongList<DataDiscoverItem,{}>{



    style=[dataDiscoverStyle.container,{height:WindowHeight-getSize(89)}]




    apiFn=(page:number)=>{
        return getDataDiscoverInformations(null,page)
    }


    render_item (item:DataDiscoverItem,index:number){
        return  (<View onLayout={(e)=>this._onItemLayout(e,index)}>
            <ArticleBrief {...item}  />
        </View>)
    }

}

@observer
class DataDiscover extends React.Component<NavigationInjectedProps>{

    store = new DataDiscoverModel();
    componentWillMount(){

        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:1})
        })
    }

    render(){
        // const {informations,loading, netError,initialized} =this.store;
        return (
        <View>
            <DataDiscoverList >
                <Tags store={this.store}/>
            </DataDiscoverList>

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