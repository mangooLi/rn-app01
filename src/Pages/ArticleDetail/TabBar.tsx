

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import {detailStyle,tabBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import {observer} from 'mobx-react';
import DetailModel from './model'
import {starInformation,deleteStarInformations} from '../../api';
import { getSize, noop } from '../../utils';

const leftIcon = require('../../assets/img/left.png');
const heart = require('../../assets/img/heart/heart.png');

const message = require('../../assets/img/message/message.png');
const share = require('../../assets/img/share/share.png');

@observer
class TabBar extends Component<NavigationInjectedProps & {store:DetailModel}>{

    navToComment(){
        this.props.navigation.navigate('Comment',{id:this.props.store.id})
    }

    toggleCollect(){
        const {article,id}=this.props.store;
        const {has_star}=article;
        if(has_star){
            deleteStarInformations([id]).then(res=>{
                console.log('delete ',res)
                this.props.store.updateArticle({has_star:false})
            }).catch(noop)
        }else{
            starInformation(id).then(res=>{
                this.props.store.updateArticle({has_star:true})
            }).catch(noop)
        }
       
    }



    render(){
        const {has_star}=this.props.store.article;
        return (
            <View style={detailStyle.tabBar}>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.goBack()}>
                    <Image style={tabBarStyle.img} source={leftIcon}/>
                </TouchableWithoutFeedback>
                <View style={tabBarStyle.none}/>
                <TouchableWithoutFeedback onPress={()=>this.toggleCollect()}>
                    <View style={tabBarStyle.img}>
                        <Icon  name="heart" size={getSize(20)} color={has_star?'#f00':'#333'}/>
                    </View> 

                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.navToComment()}>
                    <Image style={tabBarStyle.img} source={message}/>
                </TouchableWithoutFeedback>
                <Image style={{...tabBarStyle.img,...tabBarStyle.share}} source={share}/>
            </View>
        )
    }
}


export default withNavigation(TabBar)