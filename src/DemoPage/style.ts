

import {StyleSheet,ViewStyle,Animated} from 'react-native';

import {getSize, WindowWidth, WindowHeight } from '../utils';

export const demoStyle = StyleSheet.create({
    con:{
        width:getSize(375),
        height:getSize(600),
    },
    view:{
        width: getSize(375),
        borderWidth:getSize(0.5),
        // borderColor:'red',
        // paddingLeft:getSize(37.5),
        flexDirection:'row',
        height:getSize(200),
        // fontSize:getSize(30)
    },
    text:{
        color:'red',
        fontSize:getSize(20),
        fontFamily:'宋体',
        fontStyle:'italic',
        fontWeight:'bold',
        letterSpacing:getSize(2),
        lineHeight:getSize(30),
        width:getSize(200),
        // marginLeft:getSize(30)
        textDecorationLine:'underline',
        textDecorationStyle:'dotted',
        textDecorationColor:'blue',
        textShadowColor:'green',
        textShadowOffset:{width:getSize(2),height:2},
        textShadowRadius:1


    },
    innerText:{
        width:getSize(100),
        marginLeft:getSize(30)
    },
    img:{
        marginLeft:getSize(50),
        width:getSize(683/6),
        height:getSize(1024/3)
    },
    txt:{
        width:getSize(375),
        flexGrow:2
    }
})



let position_left =new Animated.Value(0)

export const animateStyle ={
    one:{
        backgroundColor:'#fa9842',
        width:WindowWidth,
        height:WindowHeight,
        zIndex:11,
        justifyContent:'space-around',
        alignContent:'center',
        position:'absolute',
        left:position_left,
        // left:0,
        // top:0,
        
    },
    two:{
        backgroundColor:'#369af5',
        width:WindowWidth,
        height:WindowHeight,
        zIndex:10
    },
    text:{
        width:WindowHeight/2,
        height:getSize(100),
        backgroundColor:'#36fff5'
    }
}


