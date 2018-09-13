


import {createMaterialTopTabNavigator,TabNavigatorConfig} from 'react-navigation';
import {AllPageWithAnimate} from './All';
import {DataDiscoverWithAnimate} from './DataDiscover';
import {ReportProductsWithAnimate} from './ReportProducts';
// import {NetErrorWithAnimate} from '../Common/NetError';

import HomeBar from './HomeBar';


const ListRoute=createMaterialTopTabNavigator({
    Home:{
        screen:AllPageWithAnimate,
    },
    DataDiscover:{
        screen:DataDiscoverWithAnimate,
    },
    ReportProducts:{
        screen:ReportProductsWithAnimate,
    },
},{

    tabBarComponent:HomeBar,
    lazy:true,
})


export default ListRoute