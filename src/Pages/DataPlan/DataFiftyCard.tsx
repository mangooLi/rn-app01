



import * as React from 'react';
import { View ,Image, Text,ImageSourcePropType,ScrollView,NativeScrollEvent} from 'react-native';
import {DataFiftyItem} from '../../api';
import {fiftyStyle} from './style';

export default class DataFiftyCard extends React.Component<DataFiftyItem>{


    render(){
        const {data_scientist_app_avatar_url,data_scientist_avatar_url,data_scientist_name,data_scientist_introduction}=this.props;
        return (
            <View style={fiftyStyle.container}>
                <Image style={fiftyStyle.img} source={{uri:data_scientist_app_avatar_url||data_scientist_avatar_url}}/>
                <View style={fiftyStyle.person}>
                    <Text style={fiftyStyle.name}>{data_scientist_name}</Text>
                    <Text numberOfLines={7} style={fiftyStyle.introduction}>{data_scientist_introduction}</Text>
                </View>
            </View>
        )
    }
}