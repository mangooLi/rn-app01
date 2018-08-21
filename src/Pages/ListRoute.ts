


import {createMaterialTopTabNavigator,TabNavigatorConfig} from 'react-navigation';


import AllPage from './All';
import DataDiscover from './DataDiscover';
import ReportProducts from './ReportProducts';

import HomeBar from './HomeBar';


const ListRoute=createMaterialTopTabNavigator({
    Home:{
        screen:AllPage,
        navigationOptions:{
            tabBarLabel:'全部'
        }
    },
    DataDiscover:{
        screen:DataDiscover,
        navigationOptions:{
            tabBarLabel:'数据洞察'
        }
    },
    ReportProducts:{
        screen:ReportProducts,
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