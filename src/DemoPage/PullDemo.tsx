

import * as React from 'react';
import { View,Text, ScrollView,StyleSheet,PanResponder,PanResponderInstance} from 'react-native';
import PullToRefresh from './PullToRefresh';
import {getSize,} from '../utils';
import PRF from './PRF';


const style = StyleSheet.create({
    loading:{
        height:getSize(50),
        backgroundColor:'#f00',

    },
    loadingText:{
        color:'#9f0',
        fontSize:getSize(20),
        textAlign:'center'
    },
    view:{
        flex:1,
        backgroundColor:'#27e'
    }
})
export default class PullDemo extends React.Component {



    refresh(){
        return (<View style={style.loading}>
            <Text style={style.loadingText}>loading</Text>
        </View>)
    }


    render (){
        return (

            <PullToRefresh refreshElement={this.refresh()} refreshElementHeight={80}>

                    <View style={{height:300,backgroundColor:'#246'}}/>
                    <View style={{height:300,backgroundColor:'#a15'}}/>
                    <View style={{height:300,backgroundColor:'#68a'}}/>

                <View style={style.view}/>
            </PullToRefresh>
        )
    }
}