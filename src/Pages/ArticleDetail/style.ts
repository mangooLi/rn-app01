import {StyleSheet,ViewStyle} from 'react-native'
import { getSize } from '../../utils';

const common={
    width:getSize(375-32),
    marginLeft:getSize(16)
}
export const detailStyle=StyleSheet.create({

    pageContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff'
    },

    tabBar:{
        height:getSize(64)
    },
    container:{
        flexGrow:1

    },
    tagBar:{
        height:getSize(30),
        width:getSize(375),
        borderTopWidth:getSize(0.3),
        borderTopColor:'#333',
        borderBottomWidth:getSize(0.3),
        borderBottomColor:'#333'
    },
    none:{
        width:getSize(375),
        height:getSize(100),
        backgroundColor:'#0dbc79'
    },
})


export const articleStyle=StyleSheet.create({
    tag:{
       ...common,
       height:getSize(17),
       marginTop:getSize(20),
       fontSize:getSize(12),
       color:'#f55c39'


    },
    thumnb_nail:{
        width:getSize(375),
        height:getSize(211),
        marginTop:getSize(24)
    },
    title:{
        width:getSize(375-32),
        marginLeft:getSize(8),
        marginTop:getSize(8)

    },
    author:{
        ...common,
        height:getSize(18),
        fontSize:getSize(13),
        marginTop:getSize(8),
        color:'#999'
    },
    content:{
        marginTop:getSize(24),
        ...common,

    },
    
})

export const recommendationStyle=StyleSheet.create({
    title:{
        height:getSize(100),
        fontSize:getSize(60),
        textAlign:'center'
    }
})