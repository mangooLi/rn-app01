

import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'
import {SmartRefreshControl,AnyHeader} from 'react-native-smartrefreshlayout';



import ArticleBrief from '../../Common/ArticleBrief'

import TabBar from '../../Common/TabBar';
import FooterLoading from '../../Common/FooterLoading';
import TopicModel from './model';
import { topicStyle } from './style';
import {getSize} from '../../utils';




@observer
export default class Topic extends Component<NavigationInjectedProps>{



    store = new TopicModel();
    srf:any;

    componentWillMount(){
        const id=this.props.navigation.getParam('id');
        const name = this.props.navigation.getParam('name');
        const type=this.props.navigation.getParam('type');
        if(name && id){
            this.store.init({id,name,type,limit:true})
        }
    }


    render(){
        const {informations,loading,netError}=this.store;
        return (
            <View style={topicStyle.container}>
                <TabBar   title={this.store.name}/>

                <FlatList 
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
                    data={informations}
                    renderItem={({item})=>{
                        return <ArticleBrief {...item}  />
                    }}
                    keyExtractor={item => item && item.id+''}
                    onEndReached={()=>this.store.loadMore()}
                    onEndReachedThreshold={0.2}                    
                    ListFooterComponent={
                        <FooterLoading loading={loading}/>
                    }
                />
            </View>
        )
    }
}