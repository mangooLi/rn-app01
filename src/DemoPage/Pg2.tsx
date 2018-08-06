import * as React from 'react';
import { View,Text,Image,WebView,ScrollView,StyleSheet} from 'react-native';
import {demoStyle} from './style';

import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import {WindowHeight,WindowWidth} from '../utils';
// import {a,b,style} from './constants'
import { getSize } from '../utils';



const styles=StyleSheet.create({
    container:{
        width:WindowWidth,
        height:WindowHeight-getSize(100)
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
