
import * as React from 'react';
import { View, Text,Button } from 'react-native';
import {NavigationInjectedProps} from 'react-navigation';


export default class ProfileScreen extends React.Component<NavigationInjectedProps>{

    render(){
        return (
            <View>
                <Text >this is profile screen</Text>
                <Button
                    title="profile" 
                    onPress={()=>{this.props.navigation.navigate('home')}}
                />
            </View>
        )
    }
}