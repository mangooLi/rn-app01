/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Route from './src/route';
import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';
import {login} from './src/api';
import './src/typings';

// declare const global: any;
if (__DEV__) {
  global.XMLHttpRequest = global.originalXMLHttpRequest || global.XMLHttpRequest;
  global.FormData = global.originalFormData || global.FormData;
  global.Blob = global.originalBlob || global.Blob;
  global.FileReader = global.originalFileReader || global.FileReader;
  
  fetch; // Ensure to get the lazy property

  // RNDebugger only
  if ((window as any).__FETCH_SUPPORT__) {
    (window as any).__FETCH_SUPPORT__.blob = false
  }
}

global.storage = new Storage({
  storageBackend: AsyncStorage,
})

// login('19951579217','123456').then(res=>{
//   this.fetching = false;
//   if(res.data){
//       storage.save({key:'user',data:res.data.data,expires:null});
//       global.token = res.data.data.token;
//       global.user = res.data.data;
//   }

// })





export default class App extends Component<{}> {
  
  render() {
    return (
        <Route /> 
    );
  }
}

