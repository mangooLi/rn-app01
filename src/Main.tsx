



import * as React from 'react';
import { View,Button} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import style from './style'


export default class Main extends React.Component<NavigationInjectedProps>{

    render(){

        return (
            <View style={style.main}>
                <Button
                    title='Home'
                    onPress={()=>{this.props.navigation.navigate('HomePage')}}
                ></Button>
                <Button
                    title='个人中心'
                    onPress={()=>{this.props.navigation.navigate('PersonalCenter')}}
                ></Button>
                 <Button
                    title='动画'
                    onPress={()=>{this.props.navigation.navigate('Animate')}}
                ></Button>
                <Button
                    title='ListRoute'
                    onPress={()=>{this.props.navigation.navigate('ListRoute')}}
                ></Button>

                <Button
                    title='article detail '
                    onPress={()=>{this.props.navigation.navigate('ArticleDetail',{id:95})}}
                ></Button>
                <Button
                    title='comment '
                    onPress={()=>{this.props.navigation.navigate('Comment',{id:55})}}
                ></Button>

                <Button
                    title='topic '
                    onPress={()=>{this.props.navigation.navigate('Topic',{id:3,name:'地铁一公里'})}}
                ></Button>

                <Button
                    title='数据报告 '
                    onPress={()=>{this.props.navigation.navigate('ReportProducts')}}
                ></Button>

                <Button
                    title='数据报告 详情'
                    onPress={()=>{this.props.navigation.navigate('ReportDetail',{id:154})}}
                ></Button>

                 <Button
                    title='数据侠计划'
                    onPress={()=>{this.props.navigation.navigate('DataPlan')}}
                ></Button>

                 <Button
                    title='数据侠简介'
                    onPress={()=>{this.props.navigation.navigate('Introduction')}}
                ></Button>

                <Button
                    title='数据科学50人'
                    onPress={()=>{this.props.navigation.navigate('DataFifty')}}
                ></Button>

                <Button
                    title='数据侠专栏'
                    onPress={()=>{this.props.navigation.navigate('DataHeroColumn')}}
                ></Button>

                 <Button
                    title='数据侠实验室'
                    onPress={()=>{this.props.navigation.navigate('DataLab')}}
                ></Button>

                 <Button
                    title='搜索'
                    onPress={()=>{this.props.navigation.navigate('SearchPage')}}
                ></Button>


                
                
                
                
            </View>
        )
    }
}

