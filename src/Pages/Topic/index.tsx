

import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'
import ArticleBrief from '../../Common/ArticleBrief'

import TabBar from '../../Common/TabBar';
import TopicModel from './model';
import { topicStyle } from './style';



@observer
export default class Topic extends Component<NavigationInjectedProps>{



    store = new TopicModel();


    componentWillMount(){
        const id=this.props.navigation.getParam('id');
        const name = this.props.navigation.getParam('name');

        if(name && id){
            this.store.init(id,name)
        }
    }


    render(){
        const {informations}=this.store;
        return (
            <View style={topicStyle.container}>
                <TabBar   title={this.store.name}/>

                <FlatList 
                    data={informations}
                    renderItem={({item})=>{
                        return <ArticleBrief {...item}  />
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <View style={topicStyle.footer}>
                            <Text></Text>
                        </View>
                    }
                />
            </View>
        )
    }
}