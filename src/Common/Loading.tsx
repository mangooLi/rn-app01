

import React,{Component} from 'react';
import {View,Image,} from 'react-native';

import {WindowHeight,WindowWidth,MyStyleSheetCreate} from '../utils';

const loadingGif = require('../assets/img/loading.gif');

export default class Loading extends Component {


    render(){
        return (<View style={style.container}>
            <Image style={style.img} source={loadingGif}/>
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
    img:{
        // width:'25%',
        // height:'25%'
    }
})

