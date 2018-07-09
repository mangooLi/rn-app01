

import * as React from 'react';
import { View, Text,Button } from 'react-native';
import styles from './style';
import {NavigationInjectedProps} from 'react-navigation';

export default class HomeScreen extends React.Component<NavigationInjectedProps>{

    toHome(){
        this.props.navigation.navigate('profile');
    }


    render(){
        return (
        <View >

        <Text style={styles.welcome}>hello world with typescript</Text>
        <Text style={styles.welcome}>Welcome   welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Button 
            title='home'
            onPress={()=>{this.toHome()}}
        />

      </View>
        )
    }
}