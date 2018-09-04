

import React,{Component} from 'react';
import {View,Text,FlatList,Animated} from 'react-native';
import TabBar from '../../Common/TabBar';
import CollectionModel from './model';
import {observer} from 'mobx-react';
import {NavigationFocusInjectedProps} from 'react-navigation';

import {tabBarStyle,pageStyle} from './style';
import CollectionCard from './CollectionCard';

import { WindowHeight ,MyStyleSheetCreate} from '../../utils';
import BottomBar from './BottomBar';


@observer
export default class MyCollection extends Component<NavigationFocusInjectedProps> {

    store = new CollectionModel();

    // state={
    //     position_left:new Animated.Value(-36)
    // }

    componentWillMount(){
        const type = this.props.navigation.getParam('type');

        if(type === 'comment'){
            this.store.setType('comment')
        }

        this.store.loadData()
    }



    TabRight =  observer(()=>{
        const {onSetting} = this.store;
        return  (
            <View>
                {onSetting
                ?<Text style={[tabBarStyle.right,tabBarStyle.right_cancal]} onPress={()=>this.store.toggleSetting()}>取消</Text>
                :<Text style={[tabBarStyle.right,tabBarStyle.right_set]} onPress={()=>this.store.toggleSetting()} >整理</Text>} 
            </View>
        )
    })

    render(){
        const {TabRight}=this;
        const {informations,onSetting,type} = this.store;
        return (<View style={pageStyle.container}>
            <TabBar title={type==='comment'?'我的评论':'我的收藏'} rightIcon={<TabRight />}/>

            <Animated.View style={[pageStyle.flatList,{left:this.store.position_left},onSetting?{height:WindowHeight-84}:null]}>
                <FlatList 
                    data={informations}
                    refreshing
                    renderItem={({item})=>{
                        return  <CollectionCard article={item} store = {this.store} />
                    }}
                    keyExtractor={item => item.id+''}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.2}
                    ListFooterComponent={
                        <View style={pageStyle.footer} />
                    }
                />
            </Animated.View>
            {onSetting && <BottomBar store ={this.store}/>}
        </View>)
    }
}