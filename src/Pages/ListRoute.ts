


import {createMaterialTopTabNavigator,TabNavigatorConfig} from 'react-navigation';


import AllPage,{AllPageWithAnimate} from './All';
import DataDiscover,{DataDiscoverWithAnimate} from './DataDiscover';
import ReportProducts,{ReportProductsWithAnimate} from './ReportProducts';
import HomeContainer from './Home/HomeContainer';

import HomeBar from './HomeBar';


const ListRoute=createMaterialTopTabNavigator({
    Home:{
        // screen:AllPage,
        screen:AllPageWithAnimate,

        navigationOptions:{
            tabBarLabel:'全部'
        }
    },
    DataDiscover:{
        // screen:DataDiscover,
        screen:DataDiscoverWithAnimate,
        navigationOptions:{
            tabBarLabel:'数据洞察'
        }
    },
    ReportProducts:{
        // screen:ReportProducts,
        screen:ReportProductsWithAnimate,
        navigationOptions:{
            tabBarLabel:'数据报告'
        }
    }
},{
    // tabBarOptions:{
    //     style:{
    //         height:getSize(46),
    //         paddingBottom:getSize(12),
    //         paddingTop:0
    //     },
    // },
    tabBarComponent:HomeBar

    

})




export default ListRoute