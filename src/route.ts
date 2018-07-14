

import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';

// Component 
import DatePickerIOSPage from './component/DatePickerIOS'

// pages
import HomePage from './Pages/Home';

const Route = createStackNavigator({
    home:{
        screen:HomeScreen
    },
    profile:{
        screen:ProfileScreen
    },
    DatePickerIOS:{
        screen:DatePickerIOSPage
    },
    HomePage:{
        screen:HomePage
    }



},{
        
            initialRouteName: 'home',
          
    })

export default Route;