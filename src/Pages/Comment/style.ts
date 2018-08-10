

import {StyleSheet,ViewStyle,TextStyle,Dimensions} from 'react-native';
import {getSize} from '../../utils';

export const commentStyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        height: Dimensions.get('window').height
    },
    scroll_container:{
        // flexShrink:1,
        flex:1
    },
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    inputBar:{

        height:getSize(64),
        width:getSize(375),
        paddingTop:getSize(8),
        backgroundColor:'#f8f8f8',
        paddingLeft:getSize(16),
        paddingRight:getSize(16),
        flexDirection:'row',
    }
})

export const tabBarStyle=StyleSheet.create({

    img:{
        marginTop:getSize(10),
        marginLeft:getSize(10),
        width:getSize(20),
        height:getSize(20)
    },
    text:{
        marginTop:getSize(8),
        height:getSize(24),
        // width:getSize(70),
        flexGrow:1,
        fontSize:getSize(17),
        textAlign:'center'
    }
})

export const cardStyle=StyleSheet.create({
    container:{
        width:getSize(375-16),
        marginLeft:getSize(16),
        marginTop:getSize(16),
        borderBottomWidth:getSize(0.4),
        borderBottomColor:'#e3e3e3',
        paddingRight:getSize(16),
        paddingBottom:getSize(16)
    },
    info:{
        flexDirection:'row'
    },
    info_right:{
        flexGrow:1,
        marginLeft:getSize(8)
    },
    info_up:{
        flexDirection:'row'
    },
    info_up_name:{
        flexGrow:1,
        height:getSize(22),
        fontSize:getSize(16)
    },
    info_up_like:{
        fontSize:getSize(12),
        width:getSize(20)
    },
    info_up_icon:{
        width:getSize(16),
        height:getSize(16)
    },
    info_time:{
        height:getSize(17),
        fontSize:getSize(12),

    },
    img:{
        width:getSize(40),
        height:getSize(40),
        borderBottomLeftRadius: getSize(20),
        borderBottomRightRadius: getSize(20),
        borderTopLeftRadius: getSize(20),
        borderTopRightRadius: getSize(20),
    },
    content:{
        marginTop:getSize(4),
        marginLeft:getSize(40+8),
        marginRight:getSize(16),
        // width:getSize(200)
    }
})

export const inputBarStyle=StyleSheet.create({
    input:{
        width:getSize(293),
        height:getSize(29),
        padding: 0,
        borderRadius: getSize(5),
        
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:getSize(0.5),
        paddingLeft:getSize(8)
    },
    text_container:{
        
    },
    text:{
        marginTop:getSize(2),
        width:getSize(34),
        fontSize:getSize(17),
        marginLeft:getSize(8)
    }
})