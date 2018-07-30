import * as React from 'react';
import { View,Text,Image,WebView,ScrollView} from 'react-native';
import {demoStyle} from './style'

import {a,b,style} from './constants'
import { getSize } from '../utils';
export default class Pg2 extends React.Component {




    render (){
        
        return (
        <View style={demoStyle.con}>
        <ScrollView>
            <Image style={demoStyle.img} source={require('../assets/img/cai.jpg')}/>
            <WebView source={{html:a}}/>
            <Image style={demoStyle.img} source={require('../assets/img/cai.jpg')}/>
            <View style={demoStyle.txt}>
                <Text  >text</Text>
            </View>
        </ScrollView>


        </View>
        )
    }
}
