

import {StyleSheet} from 'react-native';
import { getSize,WindowHeight } from '../../utils';




export const tabstyle=StyleSheet.create({
    tabContainer:{
        width:getSize(375),
        height:getSize(WindowHeight-getSize(40)),
        backgroundColor:'#fff'
    },
    item:{
        height:getSize(20),
        width:getSize(70)
    }
})

export const columnStyle = StyleSheet.create({
    flat_list:{
        backgroundColor:'#fff',

    },
    footer:{
        width:getSize(300),
        height:getSize(40+40)
    }
})

export const tagsStyle=StyleSheet.create({
    tags:{
        height:getSize(44+12),
        flexDirection:'row',
        width:getSize(375),
        
    },
    topic_container:{
        height:getSize(44),
        paddingTop:getSize(11),
        backgroundColor:'#fff'
    },
    topic:{
        marginLeft:getSize(16),
        height:getSize(22),
        flexDirection:'row',
        marginRight:getSize(16)
    },
    image:{
        width:getSize(20),
        height:getSize(20)
    },
    text:{
        fontSize:getSize(15),
        marginLeft:getSize(4)
    }
})