
import React,{Component} from 'react';
import {View,Text,TouchableOpacity,Image} from 'react-native';
import {detailStyle,tagBarStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';

const bag  = require ('../../assets/img/bag.jpeg');
const right = require('../../assets/img/right.png');

interface Props{

        id:number,
        name:string
    type:string
   
}



class TagBar extends Component<NavigationInjectedProps & Props>{
    handlePress(){
        // alert('跳转到数据侠')
        const {id,name,type}=this.props;
        id && name &&  this.props.navigation.navigate('Topic',{id,name,type})

    }
    render(){
        const {id,name,type}=this.props;
        return (
            <TouchableOpacity onPress={()=>this.handlePress()} activeOpacity={1}>
            <View style={detailStyle.tagBar}>
                <Image style={tagBarStyle.img} source={bag}/>
                <Text style={tagBarStyle.text}>{name}</Text>
                <Image style={tagBarStyle.right} source={right}/>

            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation<Props>(TagBar)