

import React,{Component} from 'react';
import {View,Text,StyleSheet,} from 'react-native';

import {getSize,WindowHeight,WindowWidth,MyStyleSheetCreate} from '../utils';
import HomeContainer from '../Pages/Home/HomeContainer'

export default class NetError extends Component {


    render(){
        return (<View style={style.container}>
            <Text style={style.text}>网络异常，请检查链接</Text>
        </View>)
    }
}

const style=MyStyleSheetCreate({
    container:{
        height:WindowHeight,
        width:WindowWidth,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        color:'#333',
        backgroundColor:'#ccc',
        width:0.50*WindowWidth,
        height:30,
        lineHeight:30,
        fontSize:16,
        borderRadius:4,
        textAlign:'center'
    }
})

export class NetErrorWithAnimate extends Component {
    render (){
        return (<HomeContainer>
            <NetError />
        </HomeContainer>)
    }
}