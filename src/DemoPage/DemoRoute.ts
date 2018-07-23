
import { createStackNavigator } from 'react-navigation';


// import Pg1 from './Pg1';
import Pg2 from './Pg2'

const DemoRoute = createStackNavigator({
    
    // Pg1:Pg1,
    Pg2:Pg2

    },{
        initialRouteName: 'Pg2',  
        navigationOptions:{
            header:null
        },
       
    })

export default DemoRoute;