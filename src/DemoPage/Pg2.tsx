import * as React from 'react';
import { View,Text,Image,WebView} from 'react-native';
import {demoStyle} from './style'

import {a} from './constants'
import { getSize } from '../utils';
export default class Pg2 extends React.Component {




    render (){
        
        return (
        <View >
            <Image style={{height:getSize(100)}} source={require('../assets/img/caiyilin.png')}/>
            <WebView style={{flex:1}} source={{html:a+a}}/>
        </View>
        )
    }
}