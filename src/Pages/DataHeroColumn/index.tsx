

import React,{Component} from 'react';
import {View,Text,ScrollView,Image,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { Tabs } from 'antd-mobile-rn';
import {observer} from 'mobx-react'

import Model from './model';
import {TabData} from './model'
import ColumnPage from './ColumnPage'
import {tabstyle} from './style';
import {map} from '../../utils'

import {dataDiscoverStyle,tagsStyle} from '../DataDiscover/style'


@observer
export default class DataHeroColumn extends Component {


    store = new Model();
    default = {title:'全部',id:0,name:'全部',introduction:'',logo_url:'',informations_count:0};
    state={
        page:0
    }
    componentWillMount(){
        this.store.loadTopics()
    }

    renderContent(tab:TabData,index:number){
        return <ColumnPage {...tab}/>
    }

    renderTabBar(tabProp:any){
        console.log('tabs',tabProp);
        return(

            <View style={dataDiscoverStyle.tags}>
                <ScrollView horizontal={true} style={tagsStyle.topic_container}>
                    {map(tabProp.tabs,(topic,index)=>(
                        <TouchableOpacity onPress={()=>this.setState({page:index})}>
                        <View style={tagsStyle.topic}>
                            {/* <Image style={tagsStyle.image} source={{uri:topic.logo_url}}/> */}
                            <Text style={tagsStyle.text}>{topic.name}</Text>
                        </View>
                        </TouchableOpacity>

                    ))}
                </ScrollView>
            </View>

        ) 
    }

    render (){
        const {topics}=this.store;
        topics.unshift(this.default)
        return (
            <View style={tabstyle.tabContainer}>
                {topics? 
                <Tabs 
                    page={this.state.page}
                    tabs={topics} 
                    initialPage={0} 
                    tabBarPosition="top"
                    renderTabBar={(tabprop)=> this.renderTabBar(tabprop)}
                    >
                    {this.renderContent}
                  

                </Tabs>:<View/>}
            </View>
        )
    }
}


