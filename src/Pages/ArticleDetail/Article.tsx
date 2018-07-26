import React ,{Component} from 'react';
import {View,Text,Image,WebView} from 'react-native';
import {observer} from 'mobx-react'
import AutoHeightWebView from 'react-native-autoheight-webview'


import DetailModel from './model';
import {map, getSize, moment} from '../../utils';
import {detailStyle,articleStyle} from './style';
// import {getInformaatinDetail} from '../../api'

interface Props{
    store:DetailModel
}

@observer
class Article extends Component<Props> {

    state:any = {};


    render (){
        const {tags,title,author,content,thumbnail_url,date}=this.props.store.article;
        console.log('state is', this.state)


        return (
            content? (<View >
                 <Text style={articleStyle.tag}>{map(tags,tag=>tag.name).join('・')}</Text>
                <AutoHeightWebView 
                    source={{html:`<div>${title}${title}${title}${title}${title}</div>`}}
                    // heightOffset={getSize(5)}
                    style={articleStyle.title}
                    customStyle={`div{font-size:22px;line-height:30px;}`}
                />
                <Text style={articleStyle.author}>文/{author}&nbsp;&nbsp;&nbsp;{moment(date).format('MM-DD HH:mm')}</Text>
                <Image style={articleStyle.thumnb_nail} source={{uri:thumbnail_url}} />
                <AutoHeightWebView 
                    source={{html:content}}
                    // heightOffset={getSize(5)}
                    style={articleStyle.content}
                    customStyle={`img{max-width:100%}`}
                />
            </View>):<View/>
        )
    }
}

export default Article