import React,{Component } from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react'
import TabBar from '../../Common/TabBar';
import Tags from './Tags';
import Model from './model';
import LabList from './LabList';

@observer
export default class DataLab extends Component {


    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }
    store = new Model()

    render (){
        const {selectedTopic} =this.store;
        return (
            <View >
                <TabBar title="数据侠实验室"/>
                <Tags store={this.store}/>
                <LabList {...selectedTopic}/>
            </View>
        )
    }
}