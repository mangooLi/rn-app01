/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {Props} from 'src/globalInterface';


import Route from './src/route';

declare const global: any;
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
export default class App extends Component<Props> {
  
  render() {
    return (
        <Route /> 
    );
  }
}

