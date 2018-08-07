

import { createStackNavigator } from 'react-navigation';


// pages
import HomePage from './Pages/Home';
import Main from './Main';
import ArticleDetail from './Pages/ArticleDetail';
import Comment from './Pages/Comment'
import Topic from './Pages/Topic';
import ReportDetail from './Pages/ReportDetail';
import DataPlan from './Pages/DataPlan';
import DataHeroIntroduction from './Pages/DataHeroIntroduction';
import DataFifty from './Pages/DataFifty';
import DataHeroColumn from './Pages/DataHeroColumn';
import DataLab from './Pages/DataLab';
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
    ReportDetail:ReportDetail,
    DataPlan:DataPlan,
    Introduction:DataHeroIntroduction,
    DataFifty:DataFifty,
    DataHeroColumn:DataHeroColumn,
    DataLab:DataLab,
    // demo
    Demo:DemoMain,
    DemoRoute:DemoRoute


    },{
        
        initialRouteName: 'Main',
        mode: 'modal',
        // headerMode: 'none',
          
    })

export default Route;