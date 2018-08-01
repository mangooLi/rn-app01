

import {RATIO ,FITRADIO}from '../constant';
import {PixelRatio, Dimensions} from 'react-native';




export const getSize=(designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*RATIO) ;
}
export const getFitSize = (designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*FITRADIO) ;
}



export const WindowHeight = Dimensions.get('window').height;

export const WindowWidth = Dimensions.get('window').width;