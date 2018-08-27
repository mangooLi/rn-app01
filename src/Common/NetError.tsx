

import React,{Component} from 'react';
import {View,Text,StyleSheet,} from 'react-native';

import {getSize,WindowHeight,WindowWidth} from '../utils';
import HomeContainer from '../Pages/Home/HomeContainer'

export default class NetError extends Component {


    render(){
        return (<View style={style.container}>
            <Text style={style.text}>网络异常，请检查链接</Text>
        </View>)
    }
}

const style=StyleSheet.create({
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
        height:getSize(30),
        lineHeight:getSize(30),
        fontSize:getSize(16),
        borderRadius:getSize(4),
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