

// import {StyleSheet,TextStyle} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';



export const pageStyle = MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff',
        flex:1
    },
    head_container:{

        alignItems:'center',
        height:88+110+106-64,
        borderBottomWidth:0.5,
        borderBottomColor:'#c8c7cc'
    },
    head_img:{
        width:110,
        height:110,
        borderRadius:55,
        marginTop:106-64
    },
    head_name:{
        fontSize:20,
        lineHeight:28,
        marginTop:8
    },
    line:{
        height:44.5,
        paddingLeft:15,
        paddingRight:15,
        paddingTop:9.5,
        flexDirection:'row'
    },
    line_text:{
        fontSize:17,
        lineHeight:24,
        flex:1
    },
    line_img:{
        marginTop:6,
        width:8,
        height:13
    }
})

export const modalStyle = MyStyleSheetCreate({
    container:{

        backgroundColor:'rgba(0,0,0,0.2)',
        flex:1,
        alignItems:'center',

    },
    content:{
        position:'absolute',
        bottom:8
    },
    card:{
        backgroundColor:'#ececec',
        borderRadius:20,
        marginTop:8,
        width:355
    },
    card01:{
        // marginTop:477-64
    },
    
    card_text:{
        fontSize:20,
        lineHeight:28,
        paddingTop:14.5,
        height:57,
        // verticalAlign:'center',
        color:'#0078fa',
        textAlign:'center'
    },
    card_text_border:{
        borderBottomWidth:0.5,
        borderBottomColor:'rgba(0,0,0,0.5)'
    }
})


export const modalStyle02=MyStyleSheetCreate({
    container:{
        position:'absolute',
        bottom:40,
        borderRadius:20,
        width:270,
        backgroundColor:'#ececec'
    },
    text:{
        textAlign:'center',
        fontSize:17,
        lineHeight:24,
        marginTop:20,
        color:'#000'

    },
    ipt:{
        width:237,
        height:24,
        backgroundColor:'#fff',
        marginTop:18.5,
        alignItems:'center',
        marginLeft:16.5,
        fontSize:13,
        // marginLeft:'auto',
        marginBottom:12,
        padding:0,
    },
    btn_container:{
        borderTopWidth:0.5,
        height:44,
        flexDirection:'row',
    },
    btn_left:{
        flex:1,
        textAlign:'center',
        fontSize:17,
        lineHeight:44,
        borderRightWidth:0.5,
    },
    btn_right:{
        flex:1,
        textAlign:'center',
        fontSize:17,
        lineHeight:44,
    }
})