import {getSize} from '../../utils';

import {StyleSheet } from 'react-native';


export const homeStyle=StyleSheet.create({
        container:{
            flexDirection:'row',
            marginTop:getSize(12),
            marginBottom:getSize(12)
        },
        head:{
            height:getSize(28),
            fontSize:getSize(20),
            color:'#333',
            width:getSize(375),
            paddingLeft:getSize(16)
        },
        img_container:{
            width:getSize(164),
            height:getSize(83),
            paddingLeft:getSize(16) 
        },
        img:{
            width:getSize(148),
            height:getSize(83),
            borderRadius:getSize(4)
        },
        detail_container:{
            flexGrow:1,
            paddingLeft:getSize(12),
            paddingRight:getSize(12),
            // overflow:'hidden',
        },
        detail_author:{
            height:getSize(17)
        },
        detail_author_text:{
            fontSize:getSize(12),
            color:'#ff570c',
        },
        detail_title:{
            
            width:getSize(187),
            height:getSize(40),
            marginTop:getSize(2)
        },
        detail_title_text:{
            fontSize:getSize(14),
            color:'#333333',
        },
        detail_date:{
            height:getSize(14),
            marginTop:getSize(4)

        },
        detail_date_text:{
            color:'#999',
            fontSize:getSize(12),
        },
        
})

export const bannerStyle=StyleSheet.create({
    banner:{
        height:getSize(212.5+110),
    },
    image:{
        width:getSize(375),
        height:getSize(212.5)
    },
    detail:{
        paddingTop:getSize(14),
        marginLeft:getSize(16),
        height:getSize(110),
        width:getSize(343)
    },
    detail_prefix:{
        height:getSize(20),
        fontSize:getSize(14),
        color:'#ee5e2b'
    },
    detail_title:{
        height:getSize(56),
        fontSize:getSize(20),
        color:'#333',
        marginTop:getSize(2)
    },
    detail_date:{
        height:getSize(14),
        fontSize:getSize(12),
        color:'#999',
        marginTop:getSize(4)
    }

})

export const dataLabStyle=StyleSheet.create({
    
    container:{
        height:getSize(192+4+52+20),
        width:getSize(343),
        paddingLeft:getSize(16),
    },
    // head:{
    //     height:getSize(28),
    //     fontSize:getSize(20),
    //     color:'#333'
    // },
    img:{
        width:getSize(343),
        height:getSize(192),
        // marginTop:getSize(12)
    },
    detail:{
        width:getSize(343),
        flexDirection:'row',
        // paddingTop:getSize(12)
    },
    detail_left:{
        width:getSize(63),
        paddingLeft:getSize(4)
    },
    detial_left_day:{
        height:getSize(52),
        fontSize:getSize(44),
        color:'#333',
        marginTop:getSize(4)

    },
    detail_left_month:{
        height:getSize(20),
        fontSize:getSize(14),
        color:'#000'
    },
    detail_right:{
        flexGrow:1,
        paddingLeft:getSize(10),
        marginTop:getSize(12)

    },
    detail_title:{
        // height:getSize(40),
        fontSize:getSize(14),
        width:getSize(269),
        color:'#333',
    },
    detail_tagAndAddress:{
        flexDirection:'row',
        marginTop:getSize(2),
        height:getSize(17)
    },
    detail_tag:{
        // width:getSize(100),
        flex:7,
        fontSize:getSize(12),
        color:'#ee5e2b'
    },
    detail_address:{
        // width:getSize(169),
        flex:20,
        paddingLeft:getSize(11),
        fontSize:getSize(11),
        color:'#333'
    }
})

export const reportStyle=StyleSheet.create({
    container:{
        height:getSize(44+ 28+ 12+ 114+8+20+2+14),
        paddingTop:getSize(44)
    },
    head:{
        height:getSize(28),
        fontSize:getSize(20),
        color:'#333',
        width:getSize(375),
        paddingLeft:getSize(16)
    },
    cardContainer:{
        width:getSize(375),
        height:getSize(12+ 114+8+20+2+14),
        paddingTop:getSize(12)
    },
    card:{
        marginLeft:getSize(16),
        width:getSize(204),
        height:getSize(114+8+20+2+14)
    },
   
    img:{
        width:getSize(204),
        height:getSize(114)
    },
    title:{
        width:getSize(204),
        height:getSize(20),
        fontSize:getSize(14),
        color:'#333',
        marginTop:getSize(8)
    },
    date:{
        height:getSize(14),
        fontSize:getSize(12),
        marginTop:getSize(2),
        color:'#999'
    }

})

export const dataLabContainerStyle = StyleSheet.create({
    container:{
        height:getSize(32+28+12+ 192+4+52+1+20+35),
        
        paddingTop:getSize(32)
    },
    head:{
        height:getSize(28),
        fontSize:getSize(20),
        color:'#333',
        width:getSize(375),
        paddingLeft:getSize(16),
        marginBottom:getSize(12)
    },
})