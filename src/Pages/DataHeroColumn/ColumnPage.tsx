


import React,{Component} from 'react';


import {View,Text, FlatList} from 'react-native';
import {observer} from 'mobx-react'
import {SmartRefreshControl,AnyHeader} from 'react-native-smartrefreshlayout';

import {getSize} from '../../utils';
import FooterLoading from '../../Common/FooterLoading';


import List from '../../Common/List';
import {getDataHeroInformations} from '../../api';
import ArticleBrief from '../../Common/ArticleBrief';

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
    changeApi(topic_id:number){
        this.apiFn=(page:number)=>{
            return getDataHeroInformations(topic_id?topic_id:null,page)
        }
    }

   
}

@observer
export default class ColumnPage extends Component<DataHeroTopic> {

    store=new Model(this.props.id);
    srf:any;
    

    componentWillMount(){
        this.store.init({limit:true})
        this.store.loadData()
    }

    componentWillReceiveProps(next:DataHeroTopic){
        if(this.props.id!==next.id){

            this.store.changeApi(next.id);
            this.store.reset();
            this.store.loadData();
        }
    }

    render (){
        const {informations,netError}=this.store;

        return (
            <View>
                <FlatList 
                    style={columnStyle.flat_list}
                    data={informations}
                    refreshControl={
                        <SmartRefreshControl 
                            ref = {(c:any)=>this.srf=c}
                            headerHeight={getSize(40)}
                            HeaderComponent={   
                                <AnyHeader >
                                    <FooterLoading loading={true} netError={netError}/>
                                </AnyHeader>}
                                
                            onRefresh={()=>{
                                this.store.loadPreData().then(res=>{
                                    this.srf.finishRefresh();
                                })
                            }}/>
                    }
                    renderItem={({item})=>{
                        return  <ArticleBrief {...item} />
                    }}
                    keyExtractor={item => item.id+''}
                    onEndReached={()=>this.store.loadMore()}
                    onEndReachedThreshold={0.2}
                    removeClippedSubviews
                    ListFooterComponent={
                        <View style={columnStyle.footer} />
                    }
                />
            </View>
        )
    }
}

