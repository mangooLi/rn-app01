

import {StyleSheet,ViewStyle} from 'react-native';

import {getSize } from '../utils';

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