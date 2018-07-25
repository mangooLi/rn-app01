import React ,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import HTML from 'react-native-render-html';
import DetailModel from './model';
import {map, getSize} from '../../utils';
import {detailStyle} from './style';


interface Props{
    store:DetailModel
    // id:number
}


export default class Article extends Component<Props> {

    


    render (){
        const {tags,title,author,id,content}=this.props.store.article
        return (
            id? (<View >
                <Text>{map(tags,tag=>tag.name).join('・')}</Text>
                <Text >{content}</Text>
                <HTML html={content} imagesMaxWidth={getSize(375-32)}  />
            </View>):<View/>
        )
    }
}