


import React,{Component} from 'react';


import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'
import {TabData} from './model';
import List from '../../Common/List';
import {DataHeroItem,getDataHeroInformations} from '../../api';
import ArticleBrief from '../Home/ArticleBrief';

import {columnStyle} from './style'


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
}

@observer
export default class ColumnPage extends Component<TabData> {

    store=new Model(this.props.id);

    componentWillMount(){
        this.store.loadData()
    }

    render (){
        const {informations}=this.store;
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

