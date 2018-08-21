



import {createBottomTabNavigator,TabNavigatorConfig} from 'react-navigation';


import ListRoute from './ListRoute';
import DataPlan from './DataPlan';
import BottomBar from '../Common/Bottombar';

const  BottomRoute = createBottomTabNavigator(
    {
    ListRoute:{
        screen:ListRoute
    },
    DataPlan:{
        screen:DataPlan
    }},{
        tabBarComponent:BottomBar
    })

export default BottomRoute
