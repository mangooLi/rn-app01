



import React,{Component} from 'react';

import {View,Text, Image,NativeSyntheticEvent,NativeScrollEvent, Linking} from'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {pageStyle} from './style'

const key = require('../../../assets/img/Keys.png')
const favor_disable = require('../../../assets/img/icFavoriteDisable/icFavoriteDisable.png')
const comment_disable = require ('../../../assets/img/icForumDisable/icForumDisable.png');
const reports_disable = require('../../../assets/img/icReportDisable/icReportDisable.png');

const setting = require('../../../assets/img/icSettingsActive/icSettingsActive.png');

export default class PersonalCenter extends Component {


    render (){

        return (
            <LinearGradient colors={['#F09819','#FF5858']} style={pageStyle.container}>
                <View style={pageStyle.avater}>

                    <Image style={pageStyle.key} source={key}/>
                    {/* <Text>UserName</Text> */}
                </View>
                <Text style={pageStyle.userName}>点击登陆</Text>

                <View style={pageStyle.link}>
                    <Image style={pageStyle.link_img} source={favor_disable}/>
                    <Text style={pageStyle.link_text}>我的收藏</Text>
                </View>

                <View style={pageStyle.link}>
                    <Image style={pageStyle.link_img} source={comment_disable}/>
                    <Text style={pageStyle.link_text}>我的评论</Text>
                </View>
                <View style={pageStyle.link}>
                    <Image style={pageStyle.link_img} source={reports_disable}/>
                    <Text style={pageStyle.link_text}>我的报告</Text>
                </View>
                <View style={pageStyle.link}>
                    <Image  style={pageStyle.link_img} source={setting}/>
                    <Text style={pageStyle.link_text}>设置</Text>
                </View>
            </LinearGradient>
        )
    }
}