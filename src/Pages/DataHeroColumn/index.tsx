
import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableWithoutFeedback, TouchableOpacity ,Dimensions} from 'react-native';
import { observer } from 'mobx-react';
import Model from './model';
import ColumnPage from './ColumnPage'
import { tabstyle } from './style';
import Tags from './Tags';

import TabBar from '../../Common/TabBar'
import { WindowHeight } from '../../constant';
import { getSize } from '../../utils';
@observer
export default class DataHeroColumn extends Component {
    store = new Model();
    default = { title: '全部', id: 0, name: '全部', introduction: '', logo_url: '', informations_count: 0 };
    
    
    componentWillMount() {
        this.store.loadTopics()
    }
    static navigationOptions={
        header:null    //隐藏顶部导航栏
    }
 

    render() {
        const { topics, selectedTopic} = this.store;

        return (
        <View style={[tabstyle.tabContainer]}>
            <TabBar title="数据侠专栏"/>
            <Tags store={this.store}/>
            {topics && topics.length && selectedTopic ?
                
                <ColumnPage {...selectedTopic}/>
                : <View />}
        </View>
        )
    }
}
