import React,{Component} from 'react';
import {Text,View,ScrollView, Button,NativeSyntheticEvent,NativeScrollEvent} from'react-native';
import {NavigationInjectedProps} from 'react-navigation';

import DetailModel from './model';

import {observer} from 'mobx-react'

import Article from './Article';
import TabBar from './TabBar';
import TagBar from './TagBar';
import Recommendations from './Recommendations'

import {detailStyle} from './style';

@observer
class ArticleDetail extends Component<NavigationInjectedProps> {

    scroll:any ;
    store = new DetailModel()
   
    static navigationOptions={
        // tabBarVisible:true,
        // header:    //隐藏顶部导航栏
    }

    componentWillMount(){
        const id=this.props.navigation.getParam('id');
        const type = this.props.navigation.getParam('type')
        this.store.setId(id,type)
    }

    handleScroll(e:NativeSyntheticEvent<NativeScrollEvent> | undefined){
        
        if(!(e && !this.store. hasLoadRecommend) )return;

        const offset = e.nativeEvent.contentOffset.y;
        const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
        const totalHeight = e.nativeEvent.contentSize.height;
        if(offset+scrollViewHeight > totalHeight-300){

            this.store.loadRecommendations();
        }

    }


    render (){
        // const {id,name}=this.store.article.topic;
        const {topic,_type} = this.store.article;
        console.log('topic',topic)

        return (
            <View style={detailStyle.pageContainer}>
                <TabBar store={this.store}/>
                <View style={detailStyle.container}>
                    <ScrollView onScroll={(e)=>this.handleScroll(e)} ref={c=>this.scroll =c}>
                        <Article  store={this.store}/>
                        {this.store._type!=='data_lab_information' ?<TagBar id={topic && topic.id} name={topic && topic.name} type={_type}/>:<View/>}
                        {/* <Text ></Text> */}
                        <Recommendations store={this.store}/>
                        <View style={detailStyle.none}/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default ArticleDetail;