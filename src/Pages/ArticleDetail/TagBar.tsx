
import React,{Component} from 'react';
import {View,Text,TouchableOpacity} from 'react-native';
import {detailStyle} from './style';



interface Props{
    tags:[{
        id:number,
        name:string
    }]
}


export default class TagBar extends Component<Props>{
    handlePress(){
        alert('跳转到数据侠')
    }
    render(){
        const {tags}=this.props;
        return (
            <TouchableOpacity onPress={()=>this.handlePress()} activeOpacity={1}>
            <View style={detailStyle.tagBar}>
                <Text>{(tags && tags[0])?tags[0].name:''}</Text>
            </View>
            </TouchableOpacity>
        )
    }
}