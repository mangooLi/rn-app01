

import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview'
import {InformationCardItem} from '../../api';
import {informationCardStyle} from './style';
import {map} from '../../utils';


export default class InformationCard extends Component<InformationCardItem>{


    render (){
        const {title,content,images}=this.props;
        return (
            <View style={informationCardStyle.container}>
                <Text style={informationCardStyle.title}>{title}</Text>
                <AutoHeightWebView 
                    style={informationCardStyle.content}
                     source={{html:content}}
                />
                {images && images.length ?
                    <View style={informationCardStyle.imgContainer}>
                        {map(images,src=><Image key={src} style={informationCardStyle.img} source={{uri:src}}/>)}
                    </View>:<View/>
                }
            </View>
        )
    }
}