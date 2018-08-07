


import React,{Component} from 'react';


import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'

import List from '../../Common/List';
import {DataHeroItem,getDataLabInformations ,DataLabItemCategory,DataLabItem} from '../../api';

import  DataLabCard from '../Home/DataLabCard';

import {listStyle} from './style'
import {DataLabTopics} from './model';
import LabContainer from './LabContainer'

class Model extends List<DataLabItem> {

    apiFn(page:number){
        return getDataLabInformations(DataLabItemCategory.all,page)
    }
    constructor(){
        super();
        this.apiFn=(page:number)=>{
            return getDataLabInformations(DataLabItemCategory.all,page)
        }
    }
    changeApi(categary:DataLabItemCategory){
        this.apiFn=(page:number)=>{
            return getDataLabInformations(categary,page)
        }
    }

   
}

@observer
export default class LabList extends Component<DataLabTopics> {
    store=new Model();
    componentWillMount(){
        this.store.loadData()
    }

    componentWillReceiveProps(next:DataLabTopics){
        if(this.props.category!==next.category){
            console.log('next',next)
            this.store.changeApi(next.category);
            this.store.reset();
            this.store.loadData();
        }
    }

    render (){
        const {informations}=this.store;


        return (
            <View>
                <FlatList 
                    style={listStyle.flat_list}
                    data={informations}
                    renderItem={({item})=>{
                        return  <LabContainer {...item} />
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