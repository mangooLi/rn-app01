import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react'

import {reportDetailStyle,tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import ReportDetailModel from './model';


const leftIcon = require('../../assets/img/left.png');

@observer
class TabBar extends Component<NavigationInjectedProps &{store:ReportDetailModel}>{

    back(){
        this.props.navigation.goBack()
    }
    render(){

        return (
            <View style={reportDetailStyle.tabBar}>
                <TouchableOpacity onPress={()=>this.back()} activeOpacity={1}>
                    <Image style={tabBarStyle.img} source={leftIcon}/>
                </TouchableOpacity>
                <Text numberOfLines={1} style={tabBarStyle.text}>{this.props.store.title}</Text>
            </View>
        )
    }
}


export default withNavigation<{store:ReportDetailModel}>(TabBar)