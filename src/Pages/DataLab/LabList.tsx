


import React,{Component} from 'react';


import {View, FlatList} from 'react-native';
import {observer} from 'mobx-react'

import List from '../../Common/List';
import {getDataLabInformations ,DataLabItemCategory} from '../../api';



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
                    keyExtractor={item => item.id+''}
                    onEndReached={()=>this.store.loadMore()}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={
                        <View style={listStyle.footer} />
                    }
                />
            </View>
        )
    }
}
