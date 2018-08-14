

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import {detailStyle,tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import DetailModel from './model'
import {startInformation} from '../../api';

const leftIcon = require('../../assets/img/left.png');
const heart = require('../../assets/img/heart.png');

const message = require('../../assets/img/message.png');
const share = require('../../assets/img/share.png');

class TabBar extends Component<NavigationInjectedProps & {store:DetailModel}>{

    navToComment(){
        this.props.navigation.navigate('Comment',{id:this.props.store.id})
    }

    collect(){
        startInformation(this.props.store.id);
    }
    render(){

        return (
            <View style={detailStyle.tabBar}>
                <Image style={tabBarStyle.img} source={leftIcon}/>
                <View style={tabBarStyle.none}/>
                <TouchableWithoutFeedback onPress={()=>this.collect()}>
                    <Image style={tabBarStyle.img} source={heart}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.navToComment()}>
                    <Image style={tabBarStyle.img} source={message}/>
                </TouchableWithoutFeedback>
                <Image style={{...tabBarStyle.img,...tabBarStyle.share}} source={share}/>
            </View>
        )
    }
}


export default withNavigation(TabBar)