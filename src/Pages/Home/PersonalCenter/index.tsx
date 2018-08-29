



import React,{Component} from 'react';

import {View,Text, Image,TouchableWithoutFeedback,} from'react-native';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';
import {observer} from 'mobx-react';
import {pageStyle} from './style';
import globalStore from '../../GlobalModel';

const key = require('../../../assets/img/Keys.png')
const favor_disable = require('../../../assets/img/icFavoriteDisable/icFavoriteDisable.png')
const comment_disable = require ('../../../assets/img/icForumDisable/icForumDisable.png');
const reports_disable = require('../../../assets/img/icReportDisable/icReportDisable.png');
const setting = require('../../../assets/img/icSettingsActive/icSettingsActive.png');
;

interface Props{
    onleave():void;
}

@observer
class PersonalCenter extends Component<NavigationInjectedProps & Props> {




    handlePress=()=>{
        if(global.user){
            this.props.navigation.navigate('AccountCenter')
        }else{
            this.props.navigation.navigate('LoginPage')
        }
        this.props.onleave();
        this.forceUpdate()
    }

    render (){
        const user:AcountInfo=globalStore.user;
        return (
            <LinearGradient colors={['#F09819','#FF5858']} style={pageStyle.container}>
                <TouchableWithoutFeedback onPress={this.handlePress}>
                <View>
                    <View style={pageStyle.avater_container}>
                        {user && user.avatar_url
                            ?<Image style={pageStyle.avater} source={ {uri:user.avatar_url,cache:'force-cache'} }/>
                            :<Image style={pageStyle.key} source={ key }/>}
                        
                    </View>
                    <Text style={pageStyle.userName}>{user &&  user.nickname || '点击登陆'}</Text>
                </View>
                </TouchableWithoutFeedback>

                <View style={pageStyle.link}>
                    <Image style={pageStyle.link_img} source={favor_disable}/>
                    <Text 
                        onPress={()=>this.props.navigation.navigate('MyCollection')}
                        style={pageStyle.link_text}>我的收藏</Text>
                </View>

                <View style={pageStyle.link}>
                    <Image style={pageStyle.link_img} source={comment_disable}/>
                    <Text style={pageStyle.link_text} 
                        onPress={()=>this.props.navigation.navigate('MyCollection',{type:'comment'})}>我的评论</Text>
                </View>
                <View style={pageStyle.link}>
                    <Image style={pageStyle.link_img} source={reports_disable} />
                    <Text style={pageStyle.link_text} 
                        onPress={()=>this.props.navigation.navigate('MyReport')}>我的报告</Text>
                </View>
                <View style={pageStyle.link}>
                    <Image  style={pageStyle.link_img} source={setting}/>
                    <Text 
                        onPress={()=>this.props.navigation.navigate('SettingPage',{type:'comment'})}
                        style={pageStyle.link_text} >设置</Text>
                </View>
            </LinearGradient>
        )
    }
}

export default withNavigation<Props>(PersonalCenter)