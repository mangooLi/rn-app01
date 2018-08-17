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
        
        if(!(e && !this.store. hasLoadRecommend) )return;

        const offset = e.nativeEvent.contentOffset.y;
        const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
        const totalHeight = e.nativeEvent.contentSize.height;
        if(offset+scrollViewHeight > totalHeight-300){

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
                        {this.store._type!=='data_lab_information' ?<TagBar tags={this.store.article.tags}/>:<View/>}
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