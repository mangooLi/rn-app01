import * as React from 'react';
import { View,} from 'react-native';


import { TabView, SceneMap } from 'react-native-tab-view';
import {WindowHeight,WindowWidth,MyStyleSheetCreate} from '../utils';
// import {a,b,style} from './constants'




const styles=MyStyleSheetCreate({
    container:{
        width:WindowWidth,
        height:WindowHeight-100
    }
})
const FirstRoute = () => (
    <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
  );
  const SecondRoute = () => (
    <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
  );


  
export default class Pg2 extends React.Component {


    state = {
        index: 0,
        routes: [
          { key: 'a', title: 'First' },
          { key: 'b', title: 'Second' },
        ],
      };
     
      render() {
        return (
          <TabView
            navigationState={this.state}
            renderScene={SceneMap({
              a: FirstRoute,
              b: SecondRoute,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: WindowWidth,height:WindowHeight }}
          />
        );
      }
}
