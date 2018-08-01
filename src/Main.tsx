



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
                    title='Demo'
                    onPress={()=>{this.props.navigation.navigate('Demo')}}
                ></Button>
                 <Button
                    title='DemoRoute'
                    onPress={()=>{this.props.navigation.navigate('DemoRoute')}}
                ></Button>
                <Button
                    title='ListRoute'
                    onPress={()=>{this.props.navigation.navigate('ListRoute')}}
                ></Button>

                <Button
                    title='article detail '
                    onPress={()=>{this.props.navigation.navigate('ArticleDetail',{id:57})}}
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

                
            </View>
        )
    }
}

