

import React,{Component} from 'react';
import {View,Image,StyleSheet,} from 'react-native';

import {getSize,WindowHeight,WindowWidth} from '../utils';

const loadingGif = require('../assets/img/loading.gif');

export default class Loading extends Component {


    render(){
        return (<View style={style.container}>
            <Image style={style.img} source={loadingGif}/>
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
    img:{
        // width:'25%',
        // height:'25%'
    }
})

