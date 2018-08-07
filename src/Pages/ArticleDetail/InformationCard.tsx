

import React,{Component} from 'react';
import {View,Text,Image,Linking} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'
import {InformationCardItem} from '../../api';
import {informationCardStyle} from './style';
import {map} from '../../utils';


export default class InformationCard extends Component<InformationCardItem>{

    link(url:string){
        Linking.openURL(url).catch(err => console.error('open link failed', err));
    }

    render (){
        const {title,content,images,link_title,link_url}=this.props;
        return (
            <View style={informationCardStyle.container}>
                <Text style={informationCardStyle.title}>{title}</Text>
                <AutoHeightWebView 
                    style={informationCardStyle.content}
                     source={{html:content}}
                     customStyle={`p{font-size:18px,line-height:30px}`}
                />
                {images && images.length ?
                    <View style={informationCardStyle.imgContainer}>
                        {map(images,src=><Image key={src} style={informationCardStyle.img} source={{uri:src}}/>)}
                    </View>:<View/>
                }
                { link_title && link_url ? <Text onPress={()=> this.link(link_url)} style={informationCardStyle.link}>🔗{link_title}</Text>:<View/>}
            </View>
        )
    }
}
