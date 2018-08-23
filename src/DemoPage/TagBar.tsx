

// const Tabbar=()=><View style={{backgroundColor:'#f0f'}}/>


import {View, Button} from 'react-native';
import React, { Component } from 'react';
import {NavigationInjectedProps} from 'react-navigation';
export default class Tabbar extends Component<NavigationInjectedProps>{

    render (){
        return <View style={{backgroundColor:'#f0f',height:80}}>
            <Button title='pg2' onPress={()=>this.props.navigation.navigate('Pg2')}/>
            <Button title='TagAndScroll' onPress={()=>this.props.navigation.navigate('TagAndScroll')}/>
        </View>
    }
}