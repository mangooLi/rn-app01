


import React,{Component} from 'react';


import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'






import {getDataHeroInformations} from '../../api';
import ArticleBrief from '../../Common/ArticleBrief';

import {columnStyle} from './style';

import LongList from '../../Common/LongList';

export default class ColumnPage extends LongList<DataHeroItem,DataHeroTopic> {

    style=columnStyle.flat_list

   
    constructor(topic_id?:number,prop?:any){
        super(prop);
        this.apiFn=(page:number)=>{
            return getDataHeroInformations(topic_id?topic_id:null,page)
        }
    }
    
    componentWillReceiveProps(next:DataHeroTopic){
        if(this.props.id!==next.id){

            this.changeApi(next.id);
            this._reload();
        }
    }
    changeApi(topic_id:number){
        this.apiFn=(page:number)=>{
            return getDataHeroInformations(topic_id?topic_id:null,page)
        }
    }
    apiFn(page:number){
        return getDataHeroInformations(null,page)
    }
    render_item(item:DataHeroItem,index:number){
        return (<View onLayout={(e)=>this._onItemLayout(e,index)}>
            <ArticleBrief {...item} />
        </View>)
    }


}

