



import * as React from 'react';
import { View,Button,ScrollView} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import style from './style'



export default class Main extends React.Component<NavigationInjectedProps>{

    render(){

        return (
        <View style={{flex:1}}>
            <View style={style.main}>


                <View style={style.btn}><Button
                    title='Pan'
                    onPress={()=>{this.props.navigation.navigate('Pan')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='Scroll'
                    onPress={()=>{this.props.navigation.navigate('Scroll')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='PullDemo'
                    onPress={()=>{this.props.navigation.navigate('PullDemo')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='动画'
                    onPress={()=>{this.props.navigation.navigate('Animate')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='icon'
                    onPress={()=>{this.props.navigation.navigate('IconPage')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='DemoRoute'
                    onPress={()=>{this.props.navigation.navigate('DemoRoute')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='Refresh'
                    onPress={()=>{this.props.navigation.navigate('Refresh')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='banner'
                    onPress={()=>{this.props.navigation.navigate('Banner')}}
                ></Button></View>

            </View>
            <View style={style.main2}>

                <View style={style.btn}><Button
                    title='Home'
                    onPress={()=>{this.props.navigation.navigate('HomePage')}}
                ></Button></View>

                
                <View style={style.btn}><Button
                    title='个人中心'
                    onPress={()=>{this.props.navigation.navigate('PersonalCenter')}}
                ></Button></View>
                
                <View style={style.btn}><Button
                    title='ListRoute'
                    onPress={()=>{this.props.navigation.navigate('ListRoute')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='BottomRoute'
                    onPress={()=>{this.props.navigation.navigate('BottomRoute')}}
                ></Button></View>


                

                <View style={style.btn}><Button
                    title='article detail '
                    onPress={()=>{this.props.navigation.navigate('ArticleDetail',{id:95})}}
                ></Button></View>
                <View style={style.btn}><Button
                    title='comment '
                    onPress={()=>{this.props.navigation.navigate('Comment',{id:55})}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='topic '
                    onPress={()=>{this.props.navigation.navigate('Topic',{id:3,name:'地铁一公里'})}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='数据报告 '
                    onPress={()=>{this.props.navigation.navigate('ReportProducts')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='数据报告 详情'
                    onPress={()=>{this.props.navigation.navigate('ReportDetail',{id:154})}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='数据侠计划'
                    onPress={()=>{this.props.navigation.navigate('DataPlan')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='数据侠简介'
                    onPress={()=>{this.props.navigation.navigate('Introduction')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='数据科学50人'
                    onPress={()=>{this.props.navigation.navigate('DataFifty')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='数据侠专栏'
                    onPress={()=>{this.props.navigation.navigate('DataHeroColumn')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='数据侠实验室'
                    onPress={()=>{this.props.navigation.navigate('DataLab')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='搜索'
                    onPress={()=>{this.props.navigation.navigate('SearchPage')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='登陆'
                    onPress={()=>{this.props.navigation.navigate('LoginPage')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='注册'
                    onPress={()=>{this.props.navigation.navigate('RegisterPage')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='我的收藏'
                    onPress={()=>{this.props.navigation.navigate('MyCollection')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='我的评论'
                    onPress={()=>{this.props.navigation.navigate('MyCollection',{type:'comment'})}}
                ></Button></View>
                <View style={style.btn}><Button
                    title='设置'
                    onPress={()=>{this.props.navigation.navigate('SettingPage')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='个人中心'
                    onPress={()=>{this.props.navigation.navigate('AccountCenter')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='修改密码'
                    onPress={()=>{this.props.navigation.navigate('UpdatePassword')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='我的报告'
                    onPress={()=>{this.props.navigation.navigate('MyReport')}}
                ></Button></View>

                <View style={style.btn}><Button
                    title='网络错误提示'
                    onPress={()=>{this.props.navigation.navigate('NetError')}}
                ></Button></View>

                 <View style={style.btn}><Button
                    title='加载中'
                    onPress={()=>{this.props.navigation.navigate('Loading')}}
                ></Button></View>

               

                


                
                
                
            </View>
        </View>
        )
    }
}

