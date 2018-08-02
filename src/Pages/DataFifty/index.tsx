


import React,{Component} from 'react';
import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'

import TabBar from './TabBar';
import Model from './model';
import CardContainer from './CardContainer';
import {dataFiftyStyle} from './style'

@observer
class DataFifty extends Component {


    store  = new Model()
   
    componentWillMount(){
        this.store.init()
    }

    render(){
        const {informations}=this.store;
        return (
            <View>
                <TabBar />
                <FlatList 
                    style={dataFiftyStyle.flatList}
                    data={informations}
                    renderItem={({item})=>{
                        return  <CardContainer {...item} />
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
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