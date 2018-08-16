


import React,{Component} from 'react';
import {View ,Text,TextInput,} from 'react-native';

import {cardStyle} from './style';

interface Prop{
    label?:string,
    placeholder:string,
    onTextChange(text:string):void,
    password?:boolean,
    style?:any
}

export default class IptCard extends Component<Prop> {

    ipt:any;

    clear(){
        this.ipt.clear()
    }

    render (){
        const {label,placeholder,onTextChange,password,style}=this.props;
        return (<View style={[cardStyle.card,style]}>
            {label?<Text style={cardStyle.label}>{label}</Text>:null}
            <TextInput 
                ref={c=>this.ipt=c}
                style={cardStyle.ipt}
                placeholder = {placeholder}   
                onChangeText={text=>onTextChange(text)}
                secureTextEntry ={Boolean(password)}     
                underlineColorAndroid="transparent"
            />
        </View>)
    }
}