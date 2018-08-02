

import {StyleSheet,ViewStyle,TextStyle,Dimensions} from 'react-native';
import {getSize} from '../../utils';



export const dataFiftyStyle=StyleSheet.create({
    footer:{
        width:getSize(300),
        height:getSize(40+24)
    },
    flatList:{
        backgroundColor:'#fff',
    },
    cardContainer:{
        marginTop:getSize(24)
    }
})

export const tabBarStyle=StyleSheet.create({
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },

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
    },

})