

import {StyleSheet} from 'react-native';
import {getSize} from '../../utils';

export const introductionStyle=StyleSheet.create({
    imgContainer:{
        zIndex:100
    },
    img:{
        width:getSize(375),
        height:getSize(313),
        
    },
    tabBar:{
        width:getSize(100),
        height:getSize(40),
        paddingTop:getSize(10),
        position:'absolute',
        top:0,
        left:0,
        // backgroundColor:'red',
        zIndex:1000
    },
    icon:{
        marginLeft:getSize(8),
        width:getSize(20),
        height:getSize(20)
    }
})