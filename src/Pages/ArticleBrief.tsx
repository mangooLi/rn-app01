

import * as React from 'react';
import { View,Image, Text } from 'react-native';
import moment from 'moment';

import {homeStyle} from './style';
interface Props{
    thumbnail_url:string;
    author:string;
    date:string|Date;
    title:string
}




export default class ArticleBrief extends React.Component<Props>{

    render(){
        const {thumbnail_url,author,date,title}=this.props;
        return (
            <View style={homeStyle.container}>
                <Image style={homeStyle.img} source={{uri:thumbnail_url}}/>
                <View style={homeStyle.view}>
                    <View >
                        <Text style={homeStyle.view_author}>{author}</Text>
                    </View>
                    <View style={homeStyle.view_right}>
                        <Text numberOfLines={2} ellipsizeMode='tail' style={homeStyle.view_title}>{title}</Text>
                    </View>
                    <View>
                        <Text style={homeStyle.view_date}>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</Text>
                    </View>
                </View>
            </View>
        )
    }
}