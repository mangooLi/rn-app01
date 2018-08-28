

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
    ipt_container:{
        width:319,
        height:52,
        marginLeft:28,
        marginTop:16,
        zIndex:9
    },
    
    ipt_accout:{
        paddingLeft:45
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
    text_pre:{
        width:319,
        height:22,
        flexDirection:'row',
        position:'absolute',
        top:15,
        zIndex:10
    },
    text_pre_left:{
        fontSize:16,
        lineHeight:22,
        color:'#ccc',
        position:'absolute',
        top:15,
        flex:1,
        marginLeft:12
    },
    text_pre_right:{
        fontSize:16,
        lineHeight:22,
        color:'#ccc',
        position:'absolute',
        top:15,
        right:12
    },
    notice_container:{
        flexDirection:'row',
        marginTop:14,
        marginLeft:32,
    },
    check_container:{
        width:14,
        height:14,
        backgroundColor:'#fff',
        borderRadius:4,
        padding:1
    },
    check_img:{
        width:13,
        height:13
    },
    notice_text:{
        marginLeft:3
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
        marginTop:28,
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