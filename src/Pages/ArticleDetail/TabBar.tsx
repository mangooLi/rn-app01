

import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import {detailStyle,tabBarStyle} from './style';

const leftIcon = require('../../assets/img/left.png');
const heart = require('../../assets/img/heart.png');

const message = require('../../assets/img/message.png');
const share = require('../../assets/img/share.png');


export default class TabBar extends Component{
    render(){

        return (
            <View style={detailStyle.tabBar}>
                {/* <Text>thhis is tab bar</Text> */}
                <Image style={tabBarStyle.img} source={leftIcon}/>
                <View style={tabBarStyle.none}/>
                <Image style={tabBarStyle.img} source={heart}/>
                <Image style={tabBarStyle.img} source={message}/>
                <Image style={{...tabBarStyle.img,...tabBarStyle.share}} source={share}/>
            </View>
        )
    }
}