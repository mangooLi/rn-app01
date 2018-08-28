

import * as React from 'react';
import { View,Image, Text,StyleSheet ,TouchableOpacity,GestureResponderEvent} from 'react-native';
import moment from 'moment';
import {getSize,MyStyleSheetCreate} from '../utils';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


// import {cardStyle} from './style';




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
        navigation.push('ArticleDetail',{id})
    }

    render(){
        const {thumbnail_url,author,date,summary}=this.props;
        return (
            <TouchableOpacity onPress={(e)=>this.handlePress(e)} activeOpacity={1}>
            <View style={cardStyle.container} >
                <View style={cardStyle.img_container}>
                    <Image style={cardStyle.img} source={{uri:thumbnail_url}}/>
                </View>
                <View style={cardStyle.detail_container}>
                    <View style={cardStyle.detail_author}>
                        <Text style={cardStyle.detail_author_text}>{author}</Text>
                    </View>
                    <View style={cardStyle.detail_title}>
                        <Text style={cardStyle.detail_title_text} numberOfLines={2} >{summary}</Text>
                    </View>
                    <View style={cardStyle.detail_date}>
                        <Text  style={cardStyle.detail_date_text}>{moment(date).format('MM-DD HH:mm:ss')}</Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation<Props>(ArticleBrief);




const cardStyle=MyStyleSheetCreate({

    container:{
        flexDirection:'row',
        marginTop:12,
        marginBottom:12
    },

    img_container:{
        width:164,
        height:83,
        paddingLeft:16 
    },
    img:{
        width:148,
        height:83,
        borderRadius:4
    },
    detail_container:{
        flexGrow:1,
        paddingLeft:12,
        paddingRight:12,
        // overflow:'hidden',
    },
    detail_author:{
        height:17
    },
    detail_author_text:{
        fontSize:12,
        color:'#ff570c',
    },
    detail_title:{
        
        width:187,
        height:40,
        marginTop:2
    },
    detail_title_text:{
        fontSize:14,
        color:'#333333',
    },
    detail_date:{
        height:14,
        marginTop:4

    },
    detail_date_text:{
        color:'#999',
        fontSize:12,
    },
    
})