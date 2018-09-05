/** @format */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';

import { Sentry } from 'react-native-sentry';
Sentry.config('https://917893a1ec624cc28c4837fb52455435@sentry.io/1274748').install();

AppRegistry.registerComponent(appName, () => App);


//密钥库口令 dtapp0.1
//名字与姓氏 li
// 组织单位名称 tapas
// 组织名称 tapas
// 城市 shanghai
// 省市区 shanghai
//国家地区代码 cn