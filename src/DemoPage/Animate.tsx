import React,{Component} from 'react';
import {View,Text} from 'react-native';
import {animateStyle} from './style'

export default class Animated extends Component {


    handlePress(){
        console.log('press')
    }

    render (){
        return (
            <View >
                <View style={animateStyle.one}> 

                    <Text onPress={()=>this.handlePress()} style={animateStyle.text}>animated</Text>
                </View>
                <View style={animateStyle.two}>

                </View>
                
            </View>
        )
    }
}