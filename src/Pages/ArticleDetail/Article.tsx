import React ,{Component} from 'react';
import {View,Text,Image,WebView} from 'react-native';
import HTML from 'react-native-render-html';
import AutoHeightWebView from 'react-native-autoheight-webview'
// import DetailModel from './model';
import {map, getSize, moment} from '../../utils';
import {detailStyle,articleStyle} from './style';
import {getInformaatinDetail} from '../../api'

interface Props{
    // store:DetailModel
    id:number
}


export default class Article extends Component<Props> {

    state:any = {};

    componentWillMount(){
        const id = this.props.id;

        getInformaatinDetail(id).then(res=>{
            if(res.data){
                this.setState({...res.data.data})
            }
        })
    }
    


    render (){
        const {tags,title,author,content,thumbnail_url,date}=this.state;
        console.log('state is', this.state)

        
        return (
            content? (<View >
                 <Text style={articleStyle.tag}>{map(tags,tag=>tag.name).join('・')}</Text>
                <Text style={articleStyle.title}>{title}</Text>
                <Text style={articleStyle.author}>文/{author}&nbsp;&nbsp;&nbsp;{moment(date).format('MM-DD HH:mm')}</Text>
                <Image style={articleStyle.thumnb_nail} source={{uri:thumbnail_url}} />
                {/* <Text >{content}</Text> */}

                    {/* <HTML html={content} imagesMaxWidth={getSize(375-32)}  /> */}
                    {/* <WebView 
                        style={articleStyle.content} 
                        source={{html:content}}
                        scalesPageToFit={true}
                    /> */}

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