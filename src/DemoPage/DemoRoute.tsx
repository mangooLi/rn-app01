
import { createStackNavigator,createMaterialTopTabNavigator } from 'react-navigation';
// import Pg1 from './Pg1';
import Pg2 from './Pg2';
import TagAndScroll from './TagAndScroll';


import Tabbar from './TagBar';


const DemoRoute = createMaterialTopTabNavigator({
    
    // Pg1:Pg1,
    Pg2:Pg2,
    TagAndScroll:TagAndScroll

    },{
        initialRouteName: 'TagAndScroll',  
        navigationOptions:{
            header:null
        },
        tabBarComponent:Tabbar
       
    })

export default DemoRoute;