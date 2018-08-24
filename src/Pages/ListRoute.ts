


import {createMaterialTopTabNavigator} from 'react-navigation';


import {AllPageWithAnimate} from './All';
import {DataDiscoverWithAnimate} from './DataDiscover';
import {ReportProductsWithAnimate} from './ReportProducts';


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