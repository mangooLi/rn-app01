

import {RATIO }from '../constant';
import {PixelRatio} from 'react-native';




export const getSize=(designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*RATIO) ;
}