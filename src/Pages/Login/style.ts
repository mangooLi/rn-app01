

import {StyleSheet} from 'react-native'
import {getSize,} from '../../utils';


export const pageStyle = StyleSheet.create({
    container:{
        flex:1,
        // height:WindowHeight
    },
    text_login:{
        fontSize:getSize(48),
        lineHeight:getSize(67),
        marginLeft:getSize(32),
        marginTop:getSize(30)
    },
    text_welcome:{
        fontSize:getSize(24),
        lineHeight:getSize(33),
        marginLeft:getSize(32)
    },
    ipt_accout:{
        width:getSize(319),
        height:getSize(52),
        marginLeft:getSize(28),
        marginTop:getSize(83),
    },
    ipt_pasword:{
        width:getSize(319),
        height:getSize(52),
        marginLeft:getSize(28),
        marginTop:getSize(16),
    },
    ipt:{
        width:getSize(319),
        height:getSize(52),
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:0,
        padding:0,
        paddingLeft:getSize(12),
        borderRadius:getSize(8)
    },
    text_notice:{
        flexDirection:'row',
        marginTop:getSize(14)
    },
    text_forget:{
        marginLeft:getSize(40),
        fontSize:getSize(14),
        lineHeight:getSize(20),
        color:'#fff'
    },
    text_new:{
        marginLeft:getSize(183),
        fontSize:getSize(14),
        lineHeight:getSize(20),
        color:'#fff'
    },
    img_container:{
        width:getSize(68),
        height:getSize(68),
        marginTop:getSize(10),
        marginLeft:getSize(154),
        borderRadius:getSize(34),
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    img:{
        width:getSize(18),
        height:getSize(12),

    }
})