

import React,{Component} from 'react';
import {View,Text,Image,Linking} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'

import {informationCardStyle} from './style';
import {map,MyStyleSheetCreate} from '../../utils';


export default class InformationCard extends Component<InformationCardItem>{

    link(url:string){
        Linking.openURL(url).catch(err => console.error('open link failed', err));
    }

    render (){
        const {title,content,images,link_title,link_url,category}=this.props;
        // console.log('content',content)
        return (
            <View style={informationCardStyle.container}>
                <Text style={informationCardStyle.title}>{title}</Text>
                {category==='text_card'?
                <AutoHeightWebView 
                    style={informationCardStyle.content}
                     source={{html:content}}
                     customStyle={`p{font-size:18px,line-height:30px}`}
                />:
                
                    <View style={informationCardStyle.imgContainer}>
                        {map(images,src=><View key={src} style={informationCardStyle.imgWrap}>
                            <Image  style={informationCardStyle.img} source={{uri:src,cache:'force-cache'}}/>
                        </View>)}
                    </View>
                }
                { link_title && link_url ? <Text onPress={()=> this.link(link_url)} style={informationCardStyle.link}>🔗{link_title}</Text>:<View/>}
            </View>
        )
    }
}
