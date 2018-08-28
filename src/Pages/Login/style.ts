

import {StyleSheet} from 'react-native'
import {getSize,MyStyleSheetCreate} from '../../utils';


export const pageStyle = MyStyleSheetCreate({
    container:{
        flex:1,
        // height:WindowHeight
    },
    text_login:{
        fontSize:48,
        lineHeight:67,
        marginLeft:32,
        marginTop:30
    },
    text_welcome:{
        fontSize:24,
        lineHeight:33,
        marginLeft:32
    },
    ipt_accout:{
        width:319,
        height:52,
        marginLeft:28,
        marginTop:83,
    },
    ipt_pasword:{
        width:319,
        height:52,
        marginLeft:28,
        marginTop:16,
    },
    ipt:{
        width:319,
        height:52,
        backgroundColor:'#fff',
        borderColor:'#fff',
        borderWidth:0,
        padding:0,
        paddingLeft:12,
        borderRadius:8
    },
    text_notice:{
        flexDirection:'row',
        marginTop:14
    },
    text_forget:{
        marginLeft:40,
        fontSize:14,
        lineHeight:20,
        color:'#fff'
    },
    text_new:{
        marginLeft:183,
        fontSize:14,
        lineHeight:20,
        color:'#fff'
    },
    img_container:{
        width:68,
        height:68,
        marginTop:10,
        marginLeft:154,
        borderRadius:34,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    },
    img:{
        width:18,
        height:12,

    }
})