
import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView,Image,TouchableWithoutFeedback} from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';
import TabBar from '../../Common/TabBar';

const rightIcon = require('../../assets/img/right0.png');
import {pageStyle} from './style';


enum Url {

    register_agreement='http://www.dtcj.com/register_agreement',
    about = 'http://www.dtcj.com/about',
    disclaimer='http://www.dtcj.com/disclaimer',
    copyright='http://www.dtcj.com/copyright'
}

export default class SettingPage extends Component<NavigationInjectedProps> {


    render (){
        return (<View style={pageStyle.container}>
            <TabBar title="设置"/>
            <Text style={pageStyle.title}>高级</Text> 
            {/* <View>
                <Text>信息保留</Text>
                <Text>信息保留</Text>
            </View> */}
            <View style={pageStyle.line}>
                <Text style={pageStyle.line_left}>清除缓存</Text>
                <Text style={pageStyle.line_right}>4.34M</Text>
            </View>
            <View style={pageStyle.line}>
                <Text style={pageStyle.line_left}>消息推送</Text>
                <Text style={pageStyle.line_right}>信息保留</Text>
            </View>
            <Text style={[pageStyle.title,pageStyle.title_about_us]}>关于我们</Text> 
            <View style={pageStyle.line}>
                <Text style={pageStyle.line_left}>版本</Text>
                <Text style={pageStyle.line_right}>2.1.0</Text>
            </View>
            <TouchableWithoutFeedback 
                onPress={()=>this.props.navigation.navigate('Feedback')}>
                <View style={pageStyle.line}>
                    <Text style={pageStyle.line_left}>意见反馈</Text>
                    <Image style={pageStyle.line_img} source={rightIcon}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>''}>
                <View style={pageStyle.line}>
                    <Text style={pageStyle.line_left}>给我们评分</Text>
                    <Image style={pageStyle.line_img} source={rightIcon}/>
                </View>
            </TouchableWithoutFeedback>
            
            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('WebPage',{uri:Url.disclaimer})}>
                <View style={pageStyle.line}>
                    <Text style={pageStyle.line_left}>版权声明</Text>
                    <Image style={pageStyle.line_img} source={rightIcon}/>
                </View>
            </TouchableWithoutFeedback>

            <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('WebPage',{uri:Url.register_agreement})}>
                <View style={pageStyle.line}>
                    <Text style={pageStyle.line_left}>用户协议</Text>
                    <Image style={pageStyle.line_img} source={rightIcon}/>
                </View>
            </TouchableWithoutFeedback>
        </View>)
    }
}