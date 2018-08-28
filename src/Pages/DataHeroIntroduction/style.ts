

import {StyleSheet} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';

export const introductionStyle=MyStyleSheetCreate({
    imgContainer:{
        zIndex:100
    },
    img:{
        width:375,
        height:313,
        
    },
    tabBar:{
        width:100,
        height:40,
        paddingTop:10,
        position:'absolute',
        top:0,
        left:0,
        // backgroundColor:'red',
        zIndex:1000
    },
    icon:{
        marginLeft:8,
        width:20,
        height:20
    }
})