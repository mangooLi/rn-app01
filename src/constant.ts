

import {Dimensions,StatusBar} from 'react-native';


export const DESIGN_WIDTH=375;
export const WindowWidth = Dimensions.get('window').width;
export const WindowHeight = Dimensions.get('window').height-(Boolean(StatusBar.currentHeight)?StatusBar.currentHeight as number:0) ;


const screenHeight = Dimensions.get('screen').height

export const RATIO=((WindowWidth<WindowHeight?WindowWidth:WindowHeight)/DESIGN_WIDTH);
export const FITRADIO = WindowWidth/DESIGN_WIDTH;
global.Dimensions = Dimensions
