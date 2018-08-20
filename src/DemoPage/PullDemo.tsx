

import * as React from 'react';
import { View,Text, ScrollView,StyleSheet,PanResponder,PanResponderInstance} from 'react-native';
import PullToRefresh from './PullToRefresh';
import {getSize,} from '../utils';



const style = StyleSheet.create({
    loadding:{
        height:getSize(50),
        backgroundColor:'#f00',

    },
    loaddingText:{
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
        return (<View style={style.loadding}>
            <Text style={style.loaddingText}>loadding</Text>
        </View>)
    }


    render (){
        return (

            <PullToRefresh refreshElement={this.refresh()} refreshElementHeight={getSize(50)}>
                <View style={style.view}>

                </View>
            </PullToRefresh>
        )
    }
}