
import React,{Component} from 'react';
import {View,Text,StyleSheet,} from 'react-native';
import {MyStyleSheetCreate, WindowWidth} from '../utils';

interface Prop{
    loading:boolean,
    netError?:boolean
}

export default class FooterLoading extends Component<Prop>{


    render (){
        const {loading,netError}=this.props;
        return (<View >
             {loading &&  <Text style={style.text}>{!netError?'正在加载，请耐心等待......':'网络错误，请稍后重试'} </Text> }
            {/* <View style={style.footer}/> */}
        </View>)
    }
}

const style = MyStyleSheetCreate({
    text:{
        height:40,
        lineHeight:40,
        fontSize:20,
        textAlign:'center'
    },
    footer:{
        width:WindowWidth,
        height:40+49

    }
})