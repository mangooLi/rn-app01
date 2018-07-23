import * as React from 'react';
import { View ,Button} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import DemoRoute from './DemoRoute';

export default class DemoMain extends React.Component<NavigationInjectedProps>{

    render(){
        return (
            <View>

                <Button
                    title='pg1'
                    onPress={()=>{}}
                ></Button>
                <Button
                    title='pg2'
                    onPress={()=>{}}
                ></Button>
                <View>
                    <DemoRoute/>
                </View>
            </View>
            
        )
    }
}