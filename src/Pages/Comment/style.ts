

import {StyleSheet,ViewStyle,TextStyle,Dimensions} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';

export const commentStyle = MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff',
        height: Dimensions.get('window').height
    },
    scroll_container:{
        // flexShrink:1,
        flex:1
    },
    tabBar:{
        height:44,
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    inputBar:{

        height:64,
        width:375,
        paddingTop:8,
        backgroundColor:'#f8f8f8',
        paddingLeft:16,
        paddingRight:16,
        flexDirection:'row',
    }
})

export const tabBarStyle=MyStyleSheetCreate({

    img:{
        marginTop:10,
        marginLeft:10,
        width:20,
        height:20
    },
    text:{
        marginTop:8,
        height:24,
        // width:70,
        flexGrow:1,
        fontSize:17,
        textAlign:'center'
    }
})

export const cardStyle=MyStyleSheetCreate({
    container:{
        width:getSize(375-16),
        marginLeft:16,
        marginTop:16,
        borderBottomWidth:0.4,
        borderBottomColor:'#e3e3e3',
        paddingRight:16,
        paddingBottom:16
    },
    info:{
        flexDirection:'row'
    },
    info_right:{
        flexGrow:1,
        marginLeft:8
    },
    info_up:{
        flexDirection:'row'
    },
    info_up_name:{
        flexGrow:1,
        height:22,
        fontSize:16
    },
    info_up_like:{
        fontSize:12,
        width:20
    },
    info_up_icon:{
        width:16,
        height:16
    },
    info_time:{
        height:17,
        fontSize:12,

    },
    img:{
        width:40,
        height:40,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    content:{
        marginTop:4,
        marginLeft:40+8,
        marginRight:16,
        // width:200
    }
})

export const inputBarStyle=MyStyleSheetCreate({
    input:{
        width:293,
        height:29,
        padding: 0,
        borderRadius: 5,
        
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:0.5,
        paddingLeft:8
    },
    text_container:{
        
    },
    text:{
        marginTop:2,
        width:34,
        fontSize:17,
        marginLeft:8
    }
})