

import {StyleSheet,ViewStyle,Animated} from 'react-native';

import {getSize, WindowWidth, WindowHeight ,MyStyleSheetCreate} from '../utils';

export const demoStyle = MyStyleSheetCreate({
    con:{
        width:375,
        height:600,
    },
    view:{
        width: 375,
        borderWidth:0.5,
        // borderColor:'red',
        // paddingLeft:37.5,
        flexDirection:'row',
        height:200,
        // fontSize:30
    },
    text:{
        color:'red',
        fontSize:20,
        fontFamily:'宋体',
        fontStyle:'italic',
        fontWeight:'bold',
        letterSpacing:2,
        lineHeight:30,
        width:200,
        // marginLeft:30
        textDecorationLine:'underline',
        textDecorationStyle:'dotted',
        textDecorationColor:'blue',
        textShadowColor:'green',
        textShadowOffset:{width:2,height:2},
        textShadowRadius:1


    },
    innerText:{
        width:100,
        marginLeft:30
    },
    img:{
        marginLeft:50,
        width:getSize(683/6),
        height:getSize(1024/3)
    },
    txt:{
        width:375,
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
        height:100,
        backgroundColor:'#36fff5'
    }
}


