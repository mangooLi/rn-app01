

import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {detailStyle,tabBarStyle} from './style';

const leftIcon = require('../../assets/img/left.png');

export default class TabBar extends Component{
    render(){

        return (
            <View style={detailStyle.tabBar}>
                {/* <Text>thhis is tab bar</Text> */}
                <Image style={tabBarStyle.img} source={leftIcon}/>
            </View>
        )
    }
}