import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


const leftIcon = require('../../assets/img/left.png');


interface Prop {
    title?:string,
    style?:any,
    rightIcon?:any,
    withoutLeftIcon?:boolean
}


class TabBar extends Component<NavigationInjectedProps &Prop>{

    back(){
        this.props.navigation.goBack()
    }
    render(){
        const {title,style,rightIcon,withoutLeftIcon}=this.props;
        return (
            <View style={[tabBarStyle.tabBar,style]}>

                {withoutLeftIcon?<View/>: <TouchableOpacity style={tabBarStyle.imgContainer} onPress={()=>this.back()} activeOpacity={1}>
                    <Image style={tabBarStyle.img} source={leftIcon}/>
                </TouchableOpacity>}
                <Text style={tabBarStyle.text}>{title}</Text>
                {rightIcon ?<View style={tabBarStyle.right}>{rightIcon}</View>:<View/>}
            </View>
        )
    }
}


export default withNavigation<Prop>(TabBar)