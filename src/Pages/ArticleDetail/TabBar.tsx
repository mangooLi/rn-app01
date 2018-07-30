

import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {detailStyle,tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import DetailModel from './model'

const leftIcon = require('../../assets/img/left.png');
const heart = require('../../assets/img/heart.png');

const message = require('../../assets/img/message.png');
const share = require('../../assets/img/share.png');

class TabBar extends Component<NavigationInjectedProps & {store:DetailModel}>{

    navToComment(){
        this.props.navigation.navigate('Comment',{id:this.props.store.id})
    }
    render(){

        return (
            <View style={detailStyle.tabBar}>
                <Image style={tabBarStyle.img} source={leftIcon}/>
                <View style={tabBarStyle.none}/>
                <Image style={tabBarStyle.img} source={heart}/>
                <TouchableOpacity onPress={()=>this.navToComment()}>
                    <Image style={tabBarStyle.img} source={message}/>
                </TouchableOpacity>
                <Image style={{...tabBarStyle.img,...tabBarStyle.share}} source={share}/>
            </View>
        )
    }
}


export default withNavigation(TabBar)