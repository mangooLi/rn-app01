

import * as React from 'react';
import { View,Image, Text } from 'react-native';
import moment from 'moment';

import {homeStyle} from './style';
interface Props{
    thumbnail_url:string;
    author?:string;
    date:string|Date;
    summary:string
}




export default class ArticleBrief extends React.Component<Props>{

    render(){
        const {thumbnail_url,author,date,summary}=this.props;
        return (
            <View style={homeStyle.container}>
                <View style={homeStyle.img_container}>
                    <Image style={homeStyle.img} source={{uri:thumbnail_url}}/>
                </View>
                <View style={homeStyle.detail_container}>
                    <View style={homeStyle.detail_author}>
                        <Text style={homeStyle.detail_author_text}>{author}</Text>
                    </View>
                    <View style={homeStyle.detail_title}>
                        <Text style={homeStyle.detail_title_text} numberOfLines={2} >{summary}</Text>
                    </View>
                    <View style={homeStyle.detail_date}>
                        <Text  style={homeStyle.detail_date_text}>{moment(date).format('MM-DD HH:mm:ss')}</Text>
                    </View>
                </View>
            </View>
        )
    }
}