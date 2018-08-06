import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


const leftIcon = require('../../assets/img/left.png');



class TabBar extends Component<NavigationInjectedProps &{title:string}>{

    back(){
        this.props.navigation.goBack()
    }
    render(){

        return (
            <View style={tabBarStyle.tabBar}>
                <TouchableOpacity style={tabBarStyle.imgContainer} onPress={()=>this.back()} activeOpacity={1}>
                    <Image style={tabBarStyle.img} source={leftIcon}/>
                </TouchableOpacity>
                <Text style={tabBarStyle.text}>{this.props.title}</Text>
            </View>
        )
    }
}


export default withNavigation<{title:string}>(TabBar)