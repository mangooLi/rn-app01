
import React,{Component} from 'react';
import {View,Text,} from 'react-native';
import {MyStyleSheetCreate, WindowWidth} from '../utils';


interface Prop{
    loading:boolean,
    netError?:boolean
}

export default class FooterLoading extends Component<Prop>{

    shouldComponentUpdate(nextProp:Prop){
        return nextProp.loading !== this.props.loading || nextProp.netError !==this.props.netError
    }

    render (){
        const {loading,netError}=this.props;
        return (<View >
             {loading && <Text style={style.text}>{loading?'正在加载，请耐心等待......':netError? '网络错误，请稍后重试':''} </Text> }
            {/* <View style={style.footer}/> */}
        </View>)
    }
}

const style = MyStyleSheetCreate({
    text:{
        height:40,
        lineHeight:40,
        fontSize:16,
        textAlign:'center'
    },
    footer:{
        width:WindowWidth,
        height:40+49

    }
})