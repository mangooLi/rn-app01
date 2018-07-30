

import * as React from 'react';
import { View,Image, Text ,TouchableOpacity,GestureResponderEvent} from 'react-native';
import moment from 'moment';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


import {homeStyle} from './style';

interface Props{
    thumbnail_url:string;
    author?:string;
    date:string|Date;
    summary:string,
    id:number,
}




 class ArticleBrief extends React.Component<Props & NavigationInjectedProps>{

    
    handlePress(e:GestureResponderEvent){
        const {navigation,id} =this.props
        // console.log('article brief pressed')
        // console.log (e)
        // console.log(e.nativeEvent)
        // console.log(e.target)

        navigation.push('ArticleDetail',{id})
    }

    render(){
        const {thumbnail_url,author,date,summary}=this.props;
        return (
            <TouchableOpacity onPress={(e)=>this.handlePress(e)} activeOpacity={1}>
            <View style={homeStyle.container} >
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
            </TouchableOpacity>
        )
    }
}

export default withNavigation<Props>(ArticleBrief)