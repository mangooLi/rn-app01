

import { createStackNavigator } from 'react-navigation';


// pages
import HomePage from './Pages/Home/Home';
import Main from './Main';
import AericleDetail from './Pages/ArticleDetail';

// route
import ListRoute from './Pages/ListRoute';
// Demo page
import DemoMain from './DemoPage/DemoMain';
import DemoRoute from './DemoPage/DemoRoute';

const Route = createStackNavigator({
    Main:Main,
    HomePage:HomePage,
    ListRoute:ListRoute,
    AericleDetail:AericleDetail,
    // demo
    Demo:DemoMain,
    DemoRoute:DemoRoute


    },{
        
        initialRouteName: 'Main',
        mode: 'modal',
        headerMode: 'none',
          
    })

export default Route;