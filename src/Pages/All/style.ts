import {getSize,MyStyleSheetCreate} from '../../utils';

import {StyleSheet } from 'react-native';


export const homeStyle=MyStyleSheetCreate({

        page_container:{
            backgroundColor:'#fff'
        },
        preInfo:{
            marginTop:24
        },
        container:{
            flexDirection:'row',
            marginTop:12,
            marginBottom:12
        },
        head:{
            height:28,
            fontSize:20,
            color:'#333',
            width:375,
            paddingLeft:16
        },
        img_container:{
            width:164,
            height:83,
            paddingLeft:16 
        },
        img:{
            width:148,
            height:83,
            borderRadius:4
        },
        detail_container:{
            flexGrow:1,
            paddingLeft:12,
            paddingRight:12,
            // overflow:'hidden',
        },
        detail_author:{
            height:17
        },
        detail_author_text:{
            fontSize:12,
            color:'#ff570c',
        },
        detail_title:{
            
            width:187,
            height:40,
            marginTop:2
        },
        detail_title_text:{
            fontSize:14,
            color:'#333333',
        },
        detail_date:{
            height:14,
            marginTop:4

        },
        detail_date_text:{
            color:'#999',
            fontSize:12,
        },
        footer:{
            height:89,
            width:200
        }
        
})

export const bannerStyle=MyStyleSheetCreate({
    banner:{
        height:(212.5+110),
    },
    image:{
        width:375,
        height:212.5
    },
    detail:{
        paddingTop:14,
        marginLeft:16,
        height:110,
        width:343
    },
    detail_prefix:{
        height:20,
        fontSize:14,
        color:'#ee5e2b'
    },
    detail_title:{
        height:56,
        fontSize:20,
        color:'#333',
        marginTop:2
    },
    detail_date:{
        height:14,
        fontSize:12,
        color:'#999',
        marginTop:4
    }

})

export const dataLabStyle=MyStyleSheetCreate({
    
    container:{
        height:(192+4+52+20),
        width:343,
        paddingLeft:16,
    },
    // head:{
    //     height:28,
    //     fontSize:20,
    //     color:'#333'
    // },
    img:{
        width:343,
        height:192,
        // marginTop:12
    },
    detail:{
        width:343,
        flexDirection:'row',
        // paddingTop:12
    },
    detail_left:{
        width:63,
        paddingLeft:4
    },
    detial_left_day:{
        height:52,
        fontSize:44,
        color:'#333',
        marginTop:4

    },
    detail_left_month:{
        height:20,
        fontSize:14,
        color:'#000'
    },
    detail_right:{
        flexGrow:1,
        paddingLeft:10,
        marginTop:12

    },
    detail_title:{
        // height:40,
        fontSize:14,
        width:269,
        color:'#333',
    },
    detail_tagAndAddress:{
        flexDirection:'row',
        marginTop:2,
        height:17
    },
    detail_tag:{
        // width:100,
        flex:7,
        fontSize:12,
        color:'#ee5e2b'
    },
    detail_address:{
        // width:169,
        flex:20,
        paddingLeft:11,
        fontSize:11,
        color:'#333'
    }
})

export const reportStyle=MyStyleSheetCreate({
    container:{
        height:44+ 28+ 12+ 114+8+20+2+14,
        paddingTop:44
    },
    head:{
        height:28,
        fontSize:20,
        color:'#333',
        width:375,
        paddingLeft:16
    },
    cardContainer:{
        width:375,
        height:12+ 114+8+20+2+14,
        paddingTop:12
    },
    card:{
        marginLeft:16,
        width:204,
        height:114+8+20+2+14
    },
   
    img:{
        width:204,
        height:114
    },
    title:{
        width:204,
        height:20,
        fontSize:14,
        color:'#333',
        marginTop:8
    },
    date:{
        height:14,
        fontSize:12,
        marginTop:2,
        color:'#999'
    }

})

export const dataLabContainerStyle = MyStyleSheetCreate({
    container:{
        height:32+28+12+ 192+4+52+1+20+35,
        
        paddingTop:32
    },
    head:{
        height:28,
        fontSize:20,
        color:'#333',
        width:375,
        paddingLeft:16,
        marginBottom:12
    },
})