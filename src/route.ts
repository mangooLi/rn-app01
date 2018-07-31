

import { createStackNavigator } from 'react-navigation';


// pages
import HomePage from './Pages/Home';
import Main from './Main';
import ArticleDetail from './Pages/ArticleDetail';
import Comment from './Pages/Comment'
import Topic from './Pages/Topic';
// route
import ListRoute from './Pages/ListRoute';
// Demo page
import DemoMain from './DemoPage/DemoMain';
import DemoRoute from './DemoPage/DemoRoute';

const Route = createStackNavigator({
    Main:Main,
    HomePage:HomePage,
    ListRoute:ListRoute,
    ArticleDetail:ArticleDetail,
    Comment:Comment,
    Topic:Topic,
    // demo
    Demo:DemoMain,
    DemoRoute:DemoRoute


    },{
        
        initialRouteName: 'Main',
        mode: 'modal',
        headerMode: 'none',
          
    })

export default Route;