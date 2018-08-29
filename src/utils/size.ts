

import {RATIO ,FITRADIO}from '../constant';
import {PixelRatio, Dimensions,StatusBar,StyleSheet,ViewStyle , TextStyle , ImageStyle} from 'react-native';





export const getSize=(designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*RATIO) ;
}
export const getFitSize = (designedSize:number):number=>{
    return PixelRatio.roundToNearestPixel(designedSize*FITRADIO) ;
}



export const WindowHeight = Dimensions.get('window').height-(Boolean(StatusBar.currentHeight)?StatusBar.currentHeight as number:0) ;

export const WindowWidth = Dimensions.get('window').width;




interface MyStyle{
    [name:string]:ViewStyle | TextStyle | ImageStyle
}


export function MyStyleSheetCreate(configs:MyStyle){
    Object.keys(configs).forEach(name=>{
        Object.keys(configs[name]).forEach(key=>{
            const value:any = (configs[name] as any)[key]

            if(typeof value === 'number' && value !==WindowWidth && value!==WindowHeight && !['flex','flexGrow','zIndex','flexShrink'].includes(key)){
                (configs[name] as any)[key] = getSize(value)
            }

        })
    })

    return StyleSheet.create(configs)
}