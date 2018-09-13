


import React,{Component} from 'react';


import {View, FlatList} from 'react-native';

import {getDataLabInformations ,DataLabItemCategory} from '../../api';



import {listStyle} from './style'
import {DataLabTopics} from './model';
import LabContainer from './LabContainer';
import LongList from '../../Common/LongList';



export default class LabList extends LongList<DataLabItem,DataLabTopics> {
    

    style=[listStyle.flat_list]

    componentWillReceiveProps(next:DataLabTopics){
        if(this.props.category!==next.category){

            this.changeApi(next.category);
            this._reload()
        }
    }

    apiFn(page:number){
        return getDataLabInformations(DataLabItemCategory.all,page)
    }
    
    changeApi(categary:DataLabItemCategory){
        this.apiFn=(page:number)=>{
            return getDataLabInformations(categary,page)
        }
    }

    render_item(item:DataLabItem,index:number){
        return (<View onLayout={(e)=>this._onItemLayout(e,index)}>
            <LabContainer {...item} />
        </View>)
    }

}
