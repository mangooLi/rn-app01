


import {createMaterialTopTabNavigator} from 'react-navigation';
import {getSize} from '../utils';

import HomePage from './Home';
import DataInsight from './DataInsight';
import DataReport from './DataReport';

const ListRoute=createMaterialTopTabNavigator({
    Home:{
        screen:HomePage,
        navigationOptions:{
            tabBarLabel:'全部'
        }
    },
    DataInsight:{
        screen:DataInsight,
        navigationOptions:{
            tabBarLabel:'数据洞察'
        }
    },
    DataReport:{
        screen:DataReport,
        navigationOptions:{
            tabBarLabel:'数据报告'
        }
    }
},{
    tabBarOptions:{
        style:{
            height:getSize(46),
            paddingBottom:getSize(12),
            paddingTop:0
        },
    }

})




export default ListRoute