



// declare const Banner:()=>any
declare const Banner:any
declare module 'react-native-whc-banner'{
    export default Banner
    export const IndicaterType :any
    export const IndicaterAlign:any
}

declare const HTML:any;
declare module 'react-native-render-html'{

    export default HTML;

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

declare var CheckBox:any
declare module 'react-native-checkbox'{
    export default CheckBox
}

declare const global:any

declare var PTRView:any;
declare module 'react-native-pull-to-refresh'{
    export default PTRView
}

