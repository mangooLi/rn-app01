

import React,{Component} from 'react';
import {View,Text,FlatList,ScrollView,NativeSyntheticEvent,NativeScrollEvent} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import {observer} from 'mobx-react';
import CommentCard from './CommentCard';
import CommentModel from './model';
import TabBar from './TabBar';
import InputBar from './InputBar';
import {commentStyle} from './style'
import {debounce} from '../../utils';

@observer
export default class Commment extends Component<NavigationInjectedProps> {

    handleScrolle:(e:NativeScrollEvent|undefined)=>void;

    store:CommentModel = new CommentModel();

    componentWillMount(){
        const id=this.props.navigation.getParam('id');
        console.log('comment id',id)
        this.store.setId(id);
        this.handleScrolle = debounce((e)=>this.onSroll(e),500)
    }

    onSroll(e:NativeScrollEvent |undefined){
        if(!e){return}
        console.log('comment scroll',e, )
        const offsetY = e.contentOffset.y; //滑动距离
        const contentSizeHeight = e.contentSize.height; //scrollView contentSize高度
        const oriageScrollHeight = e.layoutMeasurement.height; //scrollView高度
        if (offsetY + oriageScrollHeight >= contentSizeHeight-20){
            this.store.getCommentsList(this.store.pageToLoad)
        }
    }
   

    render (){
        const {commentList} =this.store;
        return (
        <View style={commentStyle.container}>
            <ScrollView onScroll={e=>{this.handleScrolle(e&&e.nativeEvent)} }>
                <TabBar />
                <FlatList
                    data={commentList}
                    renderItem={({item})=>{
                        return <CommentCard {...item}/>
                    }}
                    keyExtractor={(index) => String(index)+Math.random()}
                />
            </ScrollView>
            <InputBar store={this.store}/>
        </View>
        )
    }
}