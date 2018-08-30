


import * as React from 'react';
import { View ,Text,TextInput,KeyboardAvoidingView,} from 'react-native';
import Tabbar from '../../Common/TabBar';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationInjectedProps} from 'react-navigation';
import { getSize ,MyStyleSheetCreate, WindowWidth,noop} from '../../utils';
import {feedback} from '../../api';


export default class FeedBack extends React.Component<NavigationInjectedProps>{

    text:string;

    handleSubmit=()=>{
        if(this.text && global.user && global.user.phone){

            feedback(this.text,global.user.phone).then(()=>this.props.navigation.goBack()) .catch(noop)
        }
    }
    render (){

        return <View style={style.container}>
            <Tabbar title="意见反馈" 
                leftIcon={<Text style={style.icon_left}>返回</Text>}
                style={{backgroundColor:'#f6f6f6'}}
                pressRight={this.handleSubmit}
                rightIcon={<Icon size={getSize(20)} name="check-circle" color="#333" style={style.icon_right} /> } />
            <KeyboardAvoidingView style={{flex:1}}>
                <View style={style.ipt_container}>
                    <TextInput 
                        style={style.ipt}
                        multiline
                        underlineColorAndroid="transparent"
                        onChangeText={text=>this.text=text}
                    />
                </View>
            </KeyboardAvoidingView>
        </View>
    }
}


const style=MyStyleSheetCreate({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    icon_left:{
        // marginTop:4,
        fontSize:16
    },
    icon_right:{
        marginTop:(12),marginRight:(8)
    },
    ipt_container:{
        width:WindowWidth,
        flex:1,
        // borderWidth:1
        borderTopColor:'#ccc',
        borderTopWidth:0.5
    },
    ipt:{
        textAlignVertical: 'top'
    }
})
