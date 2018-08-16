

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';

import {cmpStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';

const homeIcon = require('../../assets/img/ic_home_24px/ic_home_24px.png')
const heroIcon = require('../../assets/img/ic_home_24px/ic_home_24px.png');

class BottomBar extends Component<NavigationInjectedProps> {

    render() {
        return (
            <View style={cmpStyle.container}>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('HomePage')}>
                    <View style={cmpStyle.part}>
                        <Image style={cmpStyle.icon} source={homeIcon}/>
                        <Text style={cmpStyle.text}>首页</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DataPlan')}>
                    <View style={cmpStyle.part}>
                        <Image style={cmpStyle.icon} source={heroIcon}/>
                        <Text style={cmpStyle.text}>数据侠</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

export default withNavigation<{}>(BottomBar)