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
        this.store.setId(id)
    }

    handleScroll(e:NativeSyntheticEvent<NativeScrollEvent> | undefined){
        console.log('scroll ing')
        
        if(!(e && !this.store. hasLoadRecommend) )return;
        console.log(e.nativeEvent)
        const offset = e.nativeEvent.contentOffset.y;
        const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
        const totalHeight = e.nativeEvent.contentSize.height;
        if(offset+scrollViewHeight > totalHeight-300){
            console.log(e.nativeEvent)
            this.store.loadRecommendations();
        }

    }


    render (){
        return (
            <View style={detailStyle.pageContainer}>
                <TabBar store={this.store}/>
                <View style={detailStyle.container}>
                    <ScrollView onScroll={(e)=>this.handleScroll(e)} ref={c=>this.scroll =c}>
                        <Article  store={this.store}/>
                        <TagBar tags={this.store.article.tags}/>
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