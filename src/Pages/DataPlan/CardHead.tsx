


import * as React from 'react';
import { View ,Image, Text,ImageSourcePropType,ScrollView,NativeScrollEvent} from 'react-native';

import {cardHeadStyle} from './style'


interface Props{
    imgPath?:string;
    title:string;
    source:ImageSourcePropType

}

export default class CardHead extends React.Component<Props>{

    render(){
        const {imgPath,title,source}=this.props;
        console.log(imgPath)
        return (
            <View style={cardHeadStyle.container} >
                <Image style={cardHeadStyle.logo} source={source}/>
                <Text style={cardHeadStyle.title}>{title}</Text>
                <Text style={cardHeadStyle.text}>查看更多</Text>
                <Image style={cardHeadStyle.right} source={require('../../assets/img/right.png')}/>
            </View>
        )
    }
}