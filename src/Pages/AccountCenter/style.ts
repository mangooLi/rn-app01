

import {StyleSheet,TextStyle} from 'react-native';
import {getSize,} from '../../utils';



export const pageStyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    head_container:{

        alignItems:'center',
        height:getSize(88+110+106-64),
        borderBottomWidth:getSize(0.5),
        borderBottomColor:'#c8c7cc'
    },
    head_img:{
        width:getSize(110),
        height:getSize(110),
        borderRadius:getSize(55),
        marginTop:getSize(106-64)
    },
    head_name:{
        fontSize:getSize(20),
        lineHeight:getSize(28),
        marginTop:getSize(8)
    },
    line:{
        height:getSize(44.5),
        paddingLeft:getSize(15),
        paddingRight:getSize(15),
        paddingTop:getSize(9.5),
        flexDirection:'row'
    },
    line_text:{
        fontSize:getSize(17),
        lineHeight:getSize(24),
        flex:1
    },
    line_img:{
        marginTop:getSize(6),
        width:getSize(8),
        height:getSize(13)
    }
})

export const modalStyle = StyleSheet.create({
    container:{

        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
        alignItems:'center',

    },
    content:{
        position:'absolute',
        bottom:getSize(8)
    },
    card:{
        backgroundColor:'#ececec',
        borderRadius:getSize(20),
        marginTop:getSize(8),
        width:getSize(355)
    },
    card01:{
        // marginTop:getSize(477-64)
    },
    
    card_text:{
        fontSize:getSize(20),
        lineHeight:getSize(28),
        paddingTop:getSize(14.5),
        height:getSize(57),
        // verticalAlign:'center',
        color:'#0078fa',
        textAlign:'center'
    },
    card_text_border:{
        borderBottomWidth:getSize(0.5),
        borderBottomColor:'rgba(0,0,0,0.5)'
    }
})


export const modalStyle02=StyleSheet.create({
    container:{
        position:'absolute',
        bottom:getSize(40),
        borderRadius:getSize(20),
        width:getSize(270),
        backgroundColor:'#ececec'
    },
    text:{
        textAlign:'center',
        fontSize:getSize(17),
        lineHeight:getSize(24),
        marginTop:getSize(20),
        color:'#000'

    },
    ipt:{
        width:getSize(237),
        height:getSize(24),
        backgroundColor:'#fff',
        marginTop:getSize(18.5),
        alignItems:'center',
        marginLeft:getSize(16.5),
        // marginLeft:'auto',
        marginBottom:getSize(12)
    },
    btn_container:{
        borderTopWidth:getSize(0.5),
        height:getSize(44),
        flexDirection:'row',
    },
    btn_left:{
        flex:1,
        textAlign:'center',
        fontSize:getSize(17),
        lineHeight:getSize(44),
        borderRightWidth:getSize(0.5),
    },
    btn_right:{
        flex:1,
        textAlign:'center',
        fontSize:getSize(17),
        lineHeight:getSize(44),
    }
})