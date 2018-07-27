import * as React from 'react';
import { View,Text,Image,WebView} from 'react-native';
import {demoStyle} from './style'

import {a} from './constants'
import { getSize } from '../utils';
export default class Pg2 extends React.Component {




    render (){
        
        return (
        <View style={demoStyle.con}>
        {/* <Image style={demoStyle.img} source={require('../assets/img/cai.jpg')}/> */}
            <WebView  source={{html:a+a}}/>
        </View>
        )
    }
}