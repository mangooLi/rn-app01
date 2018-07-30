

import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';

import {CommentItem} from '../../api';
import {moment} from '../../utils';
import {cardStyle} from './style'

export default class CommentCard extends Component<CommentItem> {


    render (){
        const {id,content,created_at,user_avatar_url,user_nickname,like_items_count} =this.props
        return (
            <View style={cardStyle.container}> 
                <View style={cardStyle.info}>
                    <Image style={cardStyle.img} source={{uri:user_avatar_url}} />
                    <View style={cardStyle.info_right}>
                        <View style={cardStyle.info_up}> 
                            <Text style={cardStyle.info_up_name}>{user_nickname}</Text>
                            <Text style={cardStyle.info_up_like}>{like_items_count}</Text>
                            <Image style={cardStyle.info_up_icon} source={require('../../assets/img/like.png')}/>
                        </View>
                        <Text style={cardStyle.info_time}>{moment(created_at).startOf('day').fromNow()}</Text>
                    </View>
                </View>
                <Text style={cardStyle.content}>{content}</Text>
            </View>
        )
    }
}