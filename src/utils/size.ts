

import {RATIO }from '../constant';
import {PixelRatio, Dimensions} from 'react-native';




export const getSize=(designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*RATIO) ;
}

export const WindowHeight = Dimensions.get('window').height;