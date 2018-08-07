

import React,{Component} from 'react';
import {View,Text,TextInput,FlatList} from 'react-native';
import {observer} from 'mobx-react'
import SearchBar from './SearchBar';

import SearchModel from './model';
import Searchitem from './SearchItem';
import {listStyle,tabBarStyle,pageStyle} from './style'


@observer
export default class SearchPage extends Component {

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    };
    store = new SearchModel();

    handleChangetext(text:string){
        this.store.search = text;
    }

    render(){
        const {search,informations}=this.store;
        return (
            <View style={pageStyle.container}>

                <SearchBar store = {this.store} />
               
                {/* <Text>search page\</Text> */}
                <FlatList
                    data={informations}
                    renderItem={({item})=>{
                        return (<View style={listStyle.container}><Searchitem  {...item}/></View>)
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <View style={listStyle.footer} />
                    }
                />
            </View>
        )
    }
}