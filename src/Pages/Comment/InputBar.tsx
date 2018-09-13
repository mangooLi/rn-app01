import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,KeyboardAvoidingView,Dimensions} from 'react-native';
import {commentStyle,inputBarStyle} from './style'
import {observer} from 'mobx-react'
import CommentModel from './model'
import {NavigationInjectedProps,withNavigation} from 'react-navigation';


@observer
class InputBar extends Component<{store:CommentModel} & NavigationInjectedProps> {

    handleChangetext(value:string){

        this.props.store.updateComment(value)

    }

    publish=()=>{

        if(global.user){

            this.props.store.publish()
        }else{
            this.props.navigation.navigate('LoginPage')
        }
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
                <TouchableOpacity style={inputBarStyle.text_container} onPress={this.publish}>
                    <View><Text style={inputBarStyle.text}>发表</Text></View> 
                </TouchableOpacity>
            </View>

        )
    }
}

export default withNavigation<NavigationInjectedProps>(InputBar)