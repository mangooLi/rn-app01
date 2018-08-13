

import {StyleSheet} from 'react-native'
import {getSize,WindowWidth, WindowHeight} from '../../utils';


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
    ipt_container:{
        width:getSize(319),
        height:getSize(52),
        marginLeft:getSize(28),
        marginTop:getSize(16),
        zIndex:9
    },
    
    ipt_accout:{
        paddingLeft:getSize(45)
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
    text_pre:{
        width:getSize(319),
        height:getSize(22),
        flexDirection:'row',
        position:'absolute',
        top:getSize(15),
        zIndex:10
    },
    text_pre_left:{
        fontSize:getSize(16),
        lineHeight:getSize(22),
        color:'#ccc',
        position:'absolute',
        top:getSize(15),
        flex:1,
        marginLeft:getSize(12)
    },
    text_pre_right:{
        fontSize:getSize(16),
        lineHeight:getSize(22),
        color:'#ccc',
        position:'absolute',
        top:getSize(15),
        right:getSize(12)
    },
    notice_container:{
        flexDirection:'row',
        marginTop:getSize(14),
        marginLeft:getSize(32),
    },
    check_container:{
        width:getSize(14),
        height:getSize(14),
        backgroundColor:'#fff',
        borderRadius:getSize(4),
        padding:getSize(1)
    },
    check_img:{
        width:getSize(13),
        height:getSize(13)
    },
    notice_text:{
        marginLeft:getSize(3)
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
        marginTop:getSize(28),
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