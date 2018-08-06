


import React,{Component} from 'react';


import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'

import List from '../../Common/List';
import {DataHeroItem,getDataHeroInformations,DataHeroTopic} from '../../api';
import ArticleBrief from '../Home/ArticleBrief';

import {columnStyle} from './style'
import { toJS } from '../../../node_modules/mobx';


class Model extends List<DataHeroItem> {

    apiFn(page:number){
        return getDataHeroInformations(null,page)
    }
    constructor(topic_id?:number){
        super();
        this.apiFn=(page:number)=>{
            return getDataHeroInformations(topic_id?topic_id:null,page)
        }
    }
    changeApi(topic_id:number){
        this.apiFn=(page:number)=>{
            return getDataHeroInformations(topic_id?topic_id:null,page)
        }
    }

   
}

@observer
export default class ColumnPage extends Component<DataHeroTopic> {

    store=new Model(this.props.id);

    componentWillMount(){
        this.store.loadData()
    }

    componentWillReceiveProps(next:DataHeroTopic){
        if(this.props.id!==next.id){
            console.log('next',next)
            this.store.changeApi(next.id);
            this.store.reset();
            this.store.loadData();
        }
    }

    render (){
        const {informations}=this.store;

        console.log('infor',toJS(informations))
        return (
            <View>
                <FlatList 
                    style={columnStyle.flat_list}
                    data={informations}
                    renderItem={({item})=>{
                        return  <ArticleBrief {...item} />
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <View style={columnStyle.footer} />
                    }
                />
            </View>
        )
    }
}

