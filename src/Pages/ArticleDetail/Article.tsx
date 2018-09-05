import React ,{Component} from 'react';
import {View,Text,Image,WebView,TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import {observer} from 'mobx-react'
import AutoHeightWebView from 'react-native-autoheight-webview'
// import HTML from 'react-native-render-html';

import DetailModel from './model';
import {map, getSize, moment,MyStyleSheetCreate, WindowWidth} from '../../utils';
import {detailStyle,articleStyle, informationCardStyle} from './style';

import InformationCard from './InformationCard';
import { toJS } from 'mobx';

interface Props{
    store:DetailModel
}

@observer
class Article extends Component<Props> {

    state:any = {
        paused:true
    };

    pause(){
        this.setState({paused:!this.state.paused})
    }

    render (){
        const {tags,title,author,content,thumbnail_url,date,summary}=this.props.store.article;
        const {_type,informationCards,video}=this.props.store;

        console.log('informationCards', toJS(informationCards))

        return (
            <View >
                <Text style={articleStyle.tag}>{map(tags,tag=>tag.name).join('・')}</Text>
                <Text  style={articleStyle.title}>{title}</Text>
                <Text style={articleStyle.author}>{author}&nbsp;&nbsp;&nbsp;{moment(date).format('MM-DD HH:mm')}</Text>
                <Image style={articleStyle.thumnb_nail} source={{uri:thumbnail_url,cache:'force-cache'}} />

                <Text style={articleStyle.laboindex}>{summary}</Text>
                {content ? 
                <AutoHeightWebView 
                    source={{html:content}}
                    // heightOffset={5}
                    style={articleStyle.content}
                    customStyle={`img{max-width:100%}`}/>
                // <View style={[articleStyle.content,{flex:1}]}>
                //     <HTML 
                //         html={content} imagesMaxWidth={WindowWidth-getSize(32)}
                //         tagsStyles={{
                //             p:{
                //                 fontSize:getSize(18),
                //                 lineHeight:getSize(30)
                //             }
                //         }}
                //     />
                // </View>
                

                :<View/>}

                {informationCards && informationCards.length ?
                    <View>
                        {informationCards.map((info:any)=><InformationCard key={info.id} {...info}/>)}
                    </View>
                    :<View/>

                }
                {
                    video?
                    <View style={informationCardStyle.container}>
                        <Text style={informationCardStyle.title}>{video.title}</Text>
                        <TouchableWithoutFeedback onPress={()=>this.pause()}>
                            <Video 
                                style={informationCardStyle.video}
                                source={{uri:video.source_url}}
                                paused = {this.state.paused}
                            />
                        </TouchableWithoutFeedback>
                    </View>:<View/>
                }

            </View>
        )
    }
}

export default Article