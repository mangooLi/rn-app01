

import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {detailStyle} from './style';

export default class TabBar extends Component{
    render(){

        return (
            <View style={detailStyle.tabBar}>
                <Text>thhis is tab bar</Text>
            </View>
        )
    }
}