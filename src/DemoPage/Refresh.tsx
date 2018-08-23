
import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,ScrollView ,RefreshControl,} from 'react-native';

import RefreshList from './RefreshList';

export default class Refresh extends Component{


    state={
        refreshing:false
    }
    _onRefresh=()=>{
        console.log('resreshing')
    }

    render (){


        return (
        <View style={{flex:1}}>
            <RefreshList 

                refreshState={0}
                onHeaderRefresh={()=>console.log('head refresh')}
                data={['#135','#357','#579','#79b']}
                renderItem ={()=>{
                    <View style={{backgroundColor:'#250',height:200}}/>
                }}

            />
        </View>
        )
    }
}