

import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'



import {getDataDiscoverInformations, getDataHeroInformations} from '../../api'

import ArticleBrief from '../../Common/ArticleBrief'

import TabBar from '../../Common/TabBar';
import FooterLoading from '../../Common/FooterLoading';
import TopicModel from './model';
import { topicStyle } from './style';
import {getSize} from '../../utils';
import LongList from '../../Common/LongList';



@observer
export default class Topic extends LongList<DataDiscoverItem|DataHeroItem,NavigationInjectedProps>{



    type:string = '';
    id:number;
    name:string;

    componentWillMount(){
        this.id=this.props.navigation.getParam('id');
        this.name = this.props.navigation.getParam('name');
        this. type=this.props.navigation.getParam('type');
        this.init()
    }
    apiFn =(page:number)=>{
        switch (this.type){
            case 'data_hero_information':return getDataHeroInformations(this.id,page);break;
            case 'data_discover_information':return getDataDiscoverInformations(this.id,page);break;
            default: return getDataDiscoverInformations(this.id,page)
        }

    }
    render_item (item:DataDiscoverItem|DataHeroItem,index:number){
        return (<View onLayout={e=>this._onItemLayout(e,index)}>
            <ArticleBrief {...item}  />
        </View>)
    }


    render(){

        return (
            <View style={topicStyle.container}>
                <TabBar   title={this.name}/>
                {super.render()}
            </View>
        )
    }
}