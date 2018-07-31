


import {StyleSheet} from 'react-native';
import {getSize} from '../../utils'

export const topicStyle=StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    footer:{
        height:getSize(98),
        width:getSize(300)
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
