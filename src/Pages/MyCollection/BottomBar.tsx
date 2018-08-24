


import React,{Component} from 'react';
import {View,Text,} from 'react-native';
import {bottomStyle} from './style';
import CollectionModel from './model';
import {observer} from 'mobx-react';

interface Prop{
    store:CollectionModel
}


@observer
export default class BottomBar extends Component<Prop> {


    render(){
        const {checkAll ,checkList}=this.props.store;
        return (<View style={bottomStyle.bottom}>
            <Text style={[bottomStyle.select]} onPress={()=>this.props.store.checkAllArticle()}>全部选中</Text>
            <Text 
                style={[bottomStyle.cancel,(checkAll ||checkList.length)?bottomStyle.cancel_all:null  ]} 
                onPress={()=>this.props.store.handleDelete()}
                >删除</Text>
        </View>)
    }
}