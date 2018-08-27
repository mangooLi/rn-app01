import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import { StyleSheet} from 'react-native'
import {getSize} from '../utils';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


const leftIcon = require('../assets/img/left.png');


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



const tabBarStyle=StyleSheet.create({
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(0.5),
        borderBottomColor:'#f8f8f8'
    },
    imgContainer:{
        position:'absolute',
        left:getSize(10),
        top:getSize(10),
        zIndex:1000,
    },
    img:{
        width:getSize(20),
        height:getSize(20),
       
    },
    text:{
        marginTop:getSize(10),
        height:getSize(24),
        flexGrow:1,
        fontSize:getSize(17),
        textAlign:'center',
        zIndex:100
    },
    right:{
        
    }
})