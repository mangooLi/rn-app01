

import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'
import ArticleBrief from '../../Common/ArticleBrief'

import TabBar from '../../Common/TabBar';
import FooterLoading from '../../Common/FooterLoading';
import TopicModel from './model';
import { topicStyle } from './style';




@observer
export default class Topic extends Component<NavigationInjectedProps>{



    store = new TopicModel();


    componentWillMount(){
        const id=this.props.navigation.getParam('id');
        const name = this.props.navigation.getParam('name');
        const type=this.props.navigation.getParam('type');
        if(name && id){
            this.store.init(id,name,type)
        }
    }


    render(){
        const {informations,loading}=this.store;
        return (
            <View style={topicStyle.container}>
                <TabBar   title={this.store.name}/>

                <FlatList 
                    data={informations}
                    renderItem={({item})=>{
                        return <ArticleBrief {...item}  />
                    }}
                    keyExtractor={item => item && item.id+''}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.2}
                    removeClippedSubviews
                    getItemLayout={(data, index) => (
                        {length: 107, offset: 107 * index, index}
                      )}
                    ListFooterComponent={
                        <FooterLoading loading={loading}/>
                    }
                />
            </View>
        )
    }
}