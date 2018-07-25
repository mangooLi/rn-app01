



import * as React from 'react';
import { View,Button} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';


export default class Main extends React.Component<NavigationInjectedProps>{

    render(){

        return (
            <View>
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
            </View>
        )
    }
}

