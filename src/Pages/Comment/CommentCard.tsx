

import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';

import {Response,toggleMineLike} from '../../api';
import {moment,MyStyleSheetCreate} from '../../utils';
import {cardStyle} from './style';
import CommentDetail from './model';

interface Props{
    store?:{
        toggleLike(comment_id:number): Promise<Response<{data:CommentItem}>>
    }
}

export default class CommentCard extends Component<CommentItem & Props> {

    state={
        like:false,
        like_count:0
    }

    toggleLike(comment_id:number){
        if(this.props.store){

            this.props.store.toggleLike(comment_id).then(res=>{
                if(res.data){
                    this.setState({like:res.data.data.has_like,like_count:res.data.data.like_items_count});
                }
            }).catch(e=>{
               
            })
        }else{
            toggleMineLike(comment_id).then(res=>{
                const {like,like_count}=this.state;
                this.setState({like:!like,like_count:like?like_count-1:like_count+1})
            })
        }
    }


    render (){
        const {id,content,created_at,user_avatar_url,user_nickname,like_items_count,has_like} =this.props;
        const {like,like_count} = this.state;
        return (
            <View style={cardStyle.container}> 
                <View style={cardStyle.info}>
                    <Image style={cardStyle.img} source={{uri:user_avatar_url,cache:'force-cache'}} />
                    <View style={cardStyle.info_right}>
                        <View style={cardStyle.info_up}> 
                            <Text style={cardStyle.info_up_name}>{user_nickname}</Text>
                            <Text style={cardStyle.info_up_like}>{like_count || like_items_count}</Text>
                            <TouchableOpacity onPress={()=>this.toggleLike(id)} activeOpacity={1}>
                                {(has_like || like)
                                ?<Image style={cardStyle.info_up_icon} source={require('../../assets/img/like_red.png')}/>
                                :<Image style={cardStyle.info_up_icon} source={require('../../assets/img/like.png')}/>}

                            </TouchableOpacity>
                        </View>
                        <Text style={cardStyle.info_time}>{moment(created_at).startOf('day').fromNow()}</Text>
                    </View>
                </View>
                <Text style={cardStyle.content}>{content}</Text>
            </View>
        )
    }
}