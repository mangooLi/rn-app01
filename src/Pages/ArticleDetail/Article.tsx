import React ,{Component} from 'react';
import {View,Text,Image,WebView,TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import {observer} from 'mobx-react'
import AutoHeightWebView from 'react-native-autoheight-webview'


import DetailModel from './model';
import {map, getSize, moment} from '../../utils';
import {detailStyle,articleStyle, informationCardStyle} from './style';
// import {getInformaatinDetail} from '../../api'
import InformationCard from './InformationCard';

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
        const {tags,title,author,content,thumbnail_url,date}=this.props.store.article;
        const {_type,laboIndex,informationCards,video}=this.props.store;


        return (
            content? (<View >
                <Text style={articleStyle.tag}>{map(tags,tag=>tag.name).join('・')}</Text>
                {/* <AutoHeightWebView 
                    source={{html:`<div>${title}${title}${title}${title}${title}</div>`}}
                    // heightOffset={getSize(5)}
                    style={articleStyle.title}
                    customStyle={`div{font-size:22px;line-height:30px;}`}
                /> */}
                <Text  style={articleStyle.title}>{title}</Text>
                <Text style={articleStyle.author}>文/{author}&nbsp;&nbsp;&nbsp;{moment(date).format('MM-DD HH:mm')}</Text>
                <Image style={articleStyle.thumnb_nail} source={{uri:thumbnail_url}} />

                {   _type !== 'data_lab_information' ? <AutoHeightWebView 
                    source={{html:content}}
                    // heightOffset={getSize(5)}
                    style={articleStyle.content}
                    customStyle={`img{max-width:100%}`}
                />:<View/>}
                {
                    Boolean(laboIndex)?(<Text style={articleStyle.laboindex}>关于数据侠实验室第{laboIndex}期，你想知道的都在这里。</Text> ):<View/>
                }

                {informationCards && informationCards.length ?
                    <View>
                        {informationCards.map(info=><InformationCard key={info.id} {...info}/>)}
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

            </View>):<View/>
        )
    }
}

export default Article