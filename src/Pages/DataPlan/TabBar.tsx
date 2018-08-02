


import * as React from 'react';
import { View ,Text,FlatList,ScrollView,TouchableWithoutFeedback} from 'react-native';

import {dataPlanstyle,tabBarStyle} from './style'
import {NavigationInjectedProps,withNavigation} from 'react-navigation'


class TabBar extends React.Component<NavigationInjectedProps> {


    handlePress(){
        this.props.navigation.navigate('Introduction')
    }
    render(){

        return (
            <View style={dataPlanstyle.tabBar}>
                <Text style={tabBarStyle.title}>数据侠计划</Text>
                <TouchableWithoutFeedback onPress={()=>this.handlePress()}>
                    <Text style={tabBarStyle.nav}>简介</Text>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default withNavigation<{}>(TabBar)