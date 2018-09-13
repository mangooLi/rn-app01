

import React,{Component,PureComponent} from 'react';
import { View,Image, Text ,TouchableOpacity,GestureResponderEvent, FlatList} from 'react-native';
import moment from 'moment';
import {getSize,MyStyleSheetCreate} from '../utils';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';







interface Props{
    thumbnail_url:string;
    author?:string;
    date:string|Date;
    summary:string,
    id:number,
    title:string,
    topic?:{
        id:number,
        name:string
    },
    show?:boolean

}


 class ArticleBrief extends Component<Props & NavigationInjectedProps >{


    updated:boolean = false;

    handlePress(e:GestureResponderEvent){
        const {navigation,id} =this.props
        navigation.push('ArticleDetail',{id})
    }

    
    componentDidMount(){
        this.updated = true;
    }

    shouldComponentUpdate(nextProp:Props & NavigationInjectedProps){
        return  this.props.show !== nextProp.show || !this.updated
        // return   !this.updated
    }



    render(){
        const {thumbnail_url,author,date,summary,title,topic,show}=this.props;

        

        return (
            <TouchableOpacity onPress={(e)=>this.handlePress(e)} activeOpacity={1}>
             <View style={cardStyle.container} >
                <View style={cardStyle.img_container}>
                    {show ? <Image style={cardStyle.img}   source={{uri:thumbnail_url,cache:'force-cache'}}/>:<View/>}
                </View>
                <View style={cardStyle.detail_container}>
                    <View style={cardStyle.detail_author}>
                        <Text style={cardStyle.detail_author_text}>{topic && topic.name}</Text>
                    </View>
                    <View style={cardStyle.detail_title}>
                        <Text style={cardStyle.detail_title_text} numberOfLines={2} >{title}</Text>
                    </View>
                    <View style={cardStyle.detail_date}>
                        <Text  style={cardStyle.detail_date_text}>{moment(date).format('MM-DD HH:mm')}</Text>
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
        width:164-16,
        height:83,
        marginLeft:16,
        backgroundColor:'#efefef'
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