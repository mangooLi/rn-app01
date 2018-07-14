

import * as React from 'react';
import { View,Image, Text } from 'react-native';


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
            <View >
                <Image style={{width:50,height:50}} source={{uri:thumbnail_url}}/>
                <View >
                    <Text >{author}</Text>
                    <Text >{title}</Text>
                    <Text >{date}</Text>

                </View>
            </View>
        )
    }
}