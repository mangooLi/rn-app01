
import React,{Component} from 'react';
import {View,Text,ScrollView ,StyleSheet,FlatList,Button,TouchableWithoutFeedback} from 'react-native';

export default class TagAndScroll extends Component{


    render(){
        return (<View>
            <View style={{height:50,backgroundColor:'#950'}}>
                <Text>this is tag</Text>
            </View>
            <View style={{height:200,backgroundColor:'#135'}}/>
            {/* <View style={{height:200,backgroundColor:'#357',transform:[{scaleX:0.8},{scaleY:0.8}]}}/> */}
            {/* <View style={{height:200,backgroundColor:'#135'}}/> */}
            <View style={{height:200,backgroundColor:'#357'}}>
                <View style={{position:"relative",backgroundColor:'#f00',left:50,top:50,height:200}}/>
            </View>

            <View style={{height:200,backgroundColor:'#579'}}/>


           
        </View>)
    }
}

