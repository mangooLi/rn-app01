



// declare const Banner:()=>any
declare const Banner:any
declare module 'react-native-whc-banner'{
    export default Banner
    export const IndicaterType :any
    export const IndicaterAlign:any
}




declare const AutoHeightWebView:any;
declare module 'react-native-autoheight-webview'{
    export default AutoHeightWebView;
}

declare const NestedScrollView:any
// declare module 'react-native-nested-scrollview'{
//     export default NestedScrollView
// }

declare module 'react-native-nested-scroll-view'{
    export default NestedScrollView
}


declare var RNStorage:{
    prototype:Storage,
    new(config:any):Storage
}
declare module 'react-native-storage'{
    export default RNStorage
}



declare var storage:{
    save(config:{
        key:string,
        data:any,
        expires:number|null
    }):void,
    load(config:{
        key:string,
        autoSync?:boolean,
        syncInBackground?: true,
        syncParams?:any
    }):Promise<any>
}



declare const global:any


declare var Icon:any;
declare module 'react-native-vector-icons/FontAwesome'{
    
    export default Icon
}

declare module 'react-native-vector-icons/Feather'{
    export default Icon;
}


declare var StackViewStyleInterpolator :{
    forHorizontal:(prop:any)=>any,
  forVertical:(prop:any)=>any,
  forFadeFromBottomAndroid:(prop:any)=>any,
  forFade:(prop:any)=>any,
}
declare module 'react-navigation/src/views/StackView/StackViewStyleInterpolator'{
    export default StackViewStyleInterpolator
}

declare var  Orientation :any;
declare module 'react-native-orientation'{
    export default Orientation
}