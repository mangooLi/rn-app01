

import * as React from 'react';
import { View,Button ,FlatList} from 'react-native';
import styles from './style';
import {NavigationInjectedProps} from 'react-navigation';
import Names from './names';

export default class HomeScreen extends React.Component<NavigationInjectedProps>{

    toHome(){
        this.props.navigation.navigate('profile');
    }

    navTo(name:string){
        this.props.navigation.navigate(name)
    }

    render(){
        return (
            
        <View style={styles.container}>

        
        <Button 
            title='profile'
            onPress={()=>{this.toHome()}}
        />
        <FlatList
            data={Names}
            renderItem={({item})=>(
                <Button 
            title={item}
            onPress={()=>{this.navTo(item)}}
        />
            )}
        ></FlatList>

      </View>
        )
    }
}