import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity, Dimensions} from 'react-native';
import {observer} from 'mobx-react'

import {topicStyle,tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import TopicModel from './model';


const leftIcon = require('../../assets/img/left.png');

@observer
class TabBar extends Component<NavigationInjectedProps &{store:TopicModel}>{

    back(){
        this.props.navigation.goBack()
        // console.log(Dimensions.get('screen'),Dimensions.get('window'))
    }
    render(){

        return (
            <View style={topicStyle.tabBar}>
                <TouchableOpacity onPress={()=>this.back()} activeOpacity={1}>
                    <Image style={tabBarStyle.img} source={leftIcon}/>
                </TouchableOpacity>
                <Text style={tabBarStyle.text}>{this.props.store.name}</Text>
            </View>
        )
    }
}


export default withNavigation<{store:TopicModel}>(TabBar)