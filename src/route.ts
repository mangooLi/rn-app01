

import { createStackNavigator} from 'react-navigation';


// pages
import AllPage from './Pages/All';

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
import SettingPage from './Pages/Setting';
import AccountCenter from './Pages/AccountCenter';
import UpdatePassword from './Pages/UpdatePassword';
import MyReport from './Pages/MyReport';
import NetError from './Common/NetError';
import Loading from './Common/Loading';
import Feedback from './Pages/Feedback';
import WebPage from './Pages/WebPage';
// route
import ListRoute from './Pages/ListRoute';
import BottomRoute from './Pages/BottomRoute';



const Route = createStackNavigator({
    HomePage:HomePage,
   
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
    SettingPage:SettingPage,
    AccountCenter:AccountCenter,
    UpdatePassword:UpdatePassword,
    MyReport:MyReport,
    BottomRoute:BottomRoute,
    NetError:NetError,
    Loading:Loading,
    Feedback:Feedback,
    WebPage:WebPage,
    // demo

   

    },{
        initialRouteName: 'BottomRoute',
        mode: 'card',
        headerMode: 'none',
        navigationOptions:{
            gesturesEnabled:true,
        }
    })

export default Route;