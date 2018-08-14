

import {RATIO ,FITRADIO}from '../constant';
import {PixelRatio, Dimensions,StatusBar} from 'react-native';




export const getSize=(designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*RATIO) ;
}
export const getFitSize = (designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*FITRADIO) ;
}



export const WindowHeight = Dimensions.get('window').height-(Boolean(StatusBar.currentHeight)?StatusBar.currentHeight as number:0) ;

export const WindowWidth = Dimensions.get('window').width;

