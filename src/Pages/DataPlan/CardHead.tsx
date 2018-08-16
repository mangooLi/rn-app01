


import * as React from 'react';
import { View ,Image, Text,ImageSourcePropType,ScrollView,NativeScrollEvent} from 'react-native';

import {cardHeadStyle} from './style';
import {withNavigation,NavigationInjectedProps} from 'react-navigation';


interface Props{
    imgPath?:string;
    title:string;
    source:ImageSourcePropType,
    navTo?:string

}

class CardHead extends React.Component<Props & NavigationInjectedProps>{

    render(){
        const {imgPath,title,source,navigation,navTo}=this.props;
        console.log(imgPath)
        return (
            <View style={cardHeadStyle.container} >
                <Image style={cardHeadStyle.logo} source={source}/>
                <Text style={cardHeadStyle.title}>{title}</Text>
                <Text style={cardHeadStyle.text} onPress={()=>navTo && navigation.navigate(navTo)}>查看更多</Text>
                <Image style={cardHeadStyle.right} source={require('../../assets/img/right.png')}/>
            </View>
        )
    }
}

export default withNavigation<Props>(CardHead)  