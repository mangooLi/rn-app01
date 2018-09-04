import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,TouchableWithoutFeedback} from 'react-native';
import { StyleSheet} from 'react-native'
import {getSize,MyStyleSheetCreate} from '../utils';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';


const leftIcon = require('../assets/img/left.png');


interface Prop {
    title?:string,
    style?:any,
    rightIcon?:any,
    leftIcon?:any;
    withoutLeftIcon?:boolean,
    pressRight?:()=>void
}


class TabBar extends Component<NavigationInjectedProps &Prop>{

    back(){
        this.props.navigation.goBack()
    }
    render(){
        const {title,style,rightIcon,withoutLeftIcon,leftIcon}=this.props;
        return (
            <View style={[tabBarStyle.tabBar,style]}>

                {withoutLeftIcon?<View/>: <TouchableOpacity style={tabBarStyle.imgContainer} onPress={()=>this.back()} activeOpacity={1}>
                    {/* <Image style={tabBarStyle.img} source={leftIcon}/> */}
                    <View style={tabBarStyle.img}><Icon size={getSize(20)} name="chevron-left"/></View> 
                    <View style={{marginLeft:4}}>{leftIcon}</View>
                </TouchableOpacity>}
                <Text style={tabBarStyle.text}>{title}</Text>
                {rightIcon ?<View style={tabBarStyle.right}>
                    <TouchableWithoutFeedback onPress={()=>this.props.pressRight && this.props.pressRight()}>
                       <View style={{flex:1}}>{rightIcon}</View> 
                    </TouchableWithoutFeedback>
                
                </View>:<View/>}
            </View>
        )
    }
}


export default withNavigation<Prop>(TabBar)



const tabBarStyle=MyStyleSheetCreate({
    tabBar:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:0.5,
        backgroundColor:'#f6f6f6',
        borderBottomColor:'#f8f8f8'
    },
    imgContainer:{
        position:'absolute',
        left:10,
        top:10,
        zIndex:1000,
        flexDirection:'row'
    },
    img:{
        width:20,
        height:20,
       
    },
    text:{
        marginTop:10,
        height:24,
        flexGrow:1,
        fontSize:17,
        textAlign:'center',
        zIndex:100
    },
    right:{

        position:'absolute',
        right:0,
        height:40,
        top:0,
        zIndex:1000

    }
})