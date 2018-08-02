import React,{Component} from 'react';
import {View,TouchableOpacity,Image} from 'react-native'
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import {introductionStyle} from './style'

const leftIcon = require('../../assets/img/left_white.png');


class TabBar extends Component<NavigationInjectedProps >{

    back(){
        this.props.navigation.goBack()
    }
    render(){

        return (
            <View style={introductionStyle.tabBar}>
                <TouchableOpacity onPress={()=>this.back()} activeOpacity={1}>
                    <Image style={introductionStyle.icon} source={leftIcon}/>
                </TouchableOpacity>
            </View>
        )
    }
}


export default withNavigation<{}>(TabBar)