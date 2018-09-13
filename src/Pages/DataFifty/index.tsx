


import React,{Component} from 'react';
import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'

import TabBar from '../../Common/TabBar';

import CardContainer from './CardContainer';
import {dataFiftyStyle} from './style';
import LongList from '../../Common/LongList';
import {getDataFiftyList} from '../../api';

class DataFiftyList extends LongList<DataFiftyItem,{}>{
    style=dataFiftyStyle.flatList;

    apiFn=(page:number)=>{
        return getDataFiftyList(page);
    }

    render_item(item:DataFiftyItem,index:number){
        return (<View onLayout={(e)=>this._onItemLayout(e,index)}>
             <CardContainer {...item} />
        </View>)
    }
}

@observer
class DataFifty extends Component {


    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

   
   

    render(){

        return (

            <DataFiftyList >
                <TabBar title="数据科学50人"/>
            </DataFiftyList>
            // <View>
            //     <TabBar title="数据科学50人"/>
            //     <FlatList 
            //         style={dataFiftyStyle.flatList}
            //         data={informations}
            //         renderItem={({item})=>{
            //             return  <CardContainer {...item} />
            //         }}
            //         removeClippedSubviews
            //         getItemLayout={(data, index) => (
            //             {length: 107, offset: 107 * index, index}
            //           )}
            //         keyExtractor={item => item.id+''}
            //         onEndReached={()=>this.store.loadMore()}
            //         onEndReachedThreshold={0.1}
            //         ListFooterComponent={
            //             <View style={dataFiftyStyle.footer} />
            //         }
            //     />
            // </View>
        )
    }
}

export default DataFifty;