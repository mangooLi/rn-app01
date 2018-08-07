import { StyleSheet} from 'react-native'
import {getSize} from '../../utils';


export const tabBarStyle=StyleSheet.create({
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'#f8f8f8'
    },
    imgContainer:{
        position:'absolute',
        // position:'relative',
        left:getSize(10),
        top:getSize(10),
        zIndex:1000,
    },
    img:{
        // marginTop:getSize(10),
        // marginLeft:getSize(10),
        width:getSize(20),
        height:getSize(20),
       
    },
    text:{
        marginTop:getSize(8),
        height:getSize(24),
        // width:getSize(70),
        flexGrow:1,
        fontSize:getSize(17),
        textAlign:'center',
        zIndex:100
    },

})