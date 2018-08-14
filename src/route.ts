

import { createStackNavigator } from 'react-navigation';


// pages
import AllPage from './Pages/All';
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
import SearchPage from './Pages/SearchPage';
import HomePage from './Pages/Home';
import PersonalCenter from './Pages/Home/PersonalCenter';
import LoginPage from './Pages/Login';
import RegisterPage from './Pages/Register';
import MyCollection from './Pages/MyCollection';
// route
import ListRoute from './Pages/ListRoute';
// Demo page
import DemoMain from './DemoPage/DemoMain';
import DemoRoute from './DemoPage/DemoRoute';
import Animate from './DemoPage/Animate';
import Scroll from './DemoPage/Scroll';



const Route = createStackNavigator({
    HomePage:HomePage,
    Main:Main,
    AllPage:AllPage,
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
    SearchPage:SearchPage,
    PersonalCenter:PersonalCenter,
    LoginPage:LoginPage,
    RegisterPage:RegisterPage,
    MyCollection:MyCollection,
    // demo
    Demo:DemoMain,
    DemoRoute:DemoRoute,
    Animate:Animate,
    Scroll:Scroll


    },{
        
        initialRouteName: 'Main',
        mode: 'modal',
        headerMode: 'none',
          
    })

export default Route;