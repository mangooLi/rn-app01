import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,Button} from 'react-native';
import {commentStyle,inputBarStyle} from './style'
import {observer} from 'mobx-react'
import CommentModel from './model'

@observer
export default class InputBar extends Component<{store:CommentModel}> {

    handleChangetext(value:string){
        console.log(value)
        this.props.store.updateComment(value)
    }
    
    render(){
        const {comment} =this.props.store;
        return (
            <View style={commentStyle.inputBar}>
                <TextInput 
                    style={inputBarStyle.input}
                    underlineColorAndroid="transparent"
                    placeholder="说点什么吧"
                    value={comment}
                    onChangeText={value=>this.handleChangetext(value)}
                />
                <TouchableOpacity style={inputBarStyle.text_container} onPress={()=>this.props.store.publish()}>
                    <Text style={inputBarStyle.text}>发表</Text>
                </TouchableOpacity>
            </View>
        )
    }
}