

import * as React from 'react';
import { View,  Text, Button } from 'react-native';

import styles from './style';
import { NavigationInjectedProps } from 'react-navigation';
import Names from './names';




export default class HomeScreen extends React.Component<NavigationInjectedProps>{

    toHome() {
        this.props.navigation.navigate('profile');
    }

    navTo(name: string) {
        this.props.navigation.navigate(name)
    }

    render() {
        return (

            <View style={styles.container}>
                <Button
                    title='profile'
                    onPress={() => { this.toHome() }}
                />
                {Names.map(name=>
                    <Button key={Math.random()} title={name} onPress={() => { this.navTo(name) }} />
                )}

            </View>
        )
    }
}