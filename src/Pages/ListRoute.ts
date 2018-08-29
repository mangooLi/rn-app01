


import {createMaterialTopTabNavigator} from 'react-navigation';
import {AllPageWithAnimate} from './All';
import {DataDiscoverWithAnimate} from './DataDiscover';
import {ReportProductsWithAnimate} from './ReportProducts';
import {NetErrorWithAnimate} from '../Common/NetError';

import HomeBar from './HomeBar';


const ListRoute=createMaterialTopTabNavigator({
    Home:{
        screen:AllPageWithAnimate,
        navigationOptions:{
            tabBarLabel:'全部'
        }
    },
    DataDiscover:{
        screen:DataDiscoverWithAnimate,
        navigationOptions:{
            tabBarLabel:'数据洞察'
        }
    },
    ReportProducts:{
        screen:ReportProductsWithAnimate,
        navigationOptions:{
            tabBarLabel:'数据报告'
        }
    },
    // NetError:{
    //     screen:NetErrorWithAnimate
    // }
},{
    // tabBarOptions:{
    //     style:{
    //         height:46,
    //         paddingBottom:12,
    //         paddingTop:0
    //     },
    // },
    tabBarComponent:HomeBar,
    lazy:true
})




export default ListRoute