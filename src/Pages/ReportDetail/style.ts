
import {StyleSheet} from 'react-native';
import {getSize,WindowHeight,WindowWidth} from '../../utils'

export const reportDetailStyle=StyleSheet.create({

    tabBar:{
        height:getSize(40),
        flexDirection:'row'
    },
    pdf:{
        flex:1,
        width:WindowWidth,
        height:WindowHeight-getSize(40),
        // padding:getSize(8)
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
        width:getSize(175),
        marginLeft:getSize(70),
        marginTop:getSize(8),
        height:getSize(24),
        fontSize:getSize(17),

    }
})