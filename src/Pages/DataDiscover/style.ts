import {StyleSheet,ViewStyle} from 'react-native';
import { getSize } from '../../utils';
import styles from '../../style';


export const dataDiscoverStyle=StyleSheet.create({
    container:{
        backgroundColor:'#f8f6f6',
        // paddingTop:getSize(20)
    },
    flat_list:{
        borderTopLeftRadius: getSize(4),
        borderTopRightRadius: getSize(4),
        backgroundColor:'#fff'
    },
    tags:{
        height:getSize(44+12),
        flexDirection:'row',
        width:getSize(375)
    }
})

export const tagsStyle=StyleSheet.create({
    topic_container:{
        height:getSize(44),
        paddingTop:getSize(11),
        backgroundColor:'#fff'
    },
    topic:{
        marginLeft:getSize(20),
        height:getSize(22),
        flexDirection:'row'
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