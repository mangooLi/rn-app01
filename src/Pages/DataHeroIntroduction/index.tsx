



import * as React from 'react';
import { View ,Image,Text,ScrollView,NativeScrollEvent} from 'react-native';
import { map } from '../../utils';

import TabBar from './TabBar';
import {introductionStyle} from './style';

export default class DataHeroIntroduction extends React.Component {

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

    imgs=[
        require('../../assets/img//data_hero_introduction1.png'),
        require('../../assets/img//data_hero_introduction2.png'),
        require('../../assets/img//data_hero_introduction3.png'),
        require('../../assets/img//data_hero_introduction4.png'),
        require('../../assets/img//data_hero_introduction5.png'),
    ];

    render(){
        return (
            <View>
                <TabBar/>
                <ScrollView style={introductionStyle.imgContainer}>
                    {map(this.imgs,(img,index)=>(
                        <Image key={index} style={introductionStyle.img} source={img}/>
                    ))}
                </ScrollView>
                
            </View>
        )
    }
}