


import React,{Component} from 'react';
import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'

import TabBar from '../../Common/TabBar';
import Model from './model';
import CardContainer from './CardContainer';
import {dataFiftyStyle} from './style'

@observer
class DataFifty extends Component {


    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }
    store  = new Model()
   
    componentWillMount(){
        this.store.init()
    }

    render(){
        const {informations}=this.store;
        return (
            <View>
                <TabBar title="数据科学50人"/>
                <FlatList 
                    style={dataFiftyStyle.flatList}
                    data={informations}
                    renderItem={({item})=>{
                        return  <CardContainer {...item} />
                    }}
                    removeClippedSubviews
                    getItemLayout={(data, index) => (
                        {length: 107, offset: 107 * index, index}
                      )}
                    keyExtractor={item => item.id+''}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <View style={dataFiftyStyle.footer} />
                    }
                />
            </View>
        )
    }
}

export default DataFifty;