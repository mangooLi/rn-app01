

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

const Route = createStackNavigator({
    home:{
        screen:HomeScreen
    },
    profile:{
        screen:ProfileScreen
    }},{
        
            initialRouteName: 'home',
          
    })

export default Route;