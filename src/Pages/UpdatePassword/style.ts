

import {StyleSheet} from 'react-native';
import {getSize} from '../../utils';


export const pageStyle = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    rightIcon:{
        fontSize:getSize(17),
        lineHeight:getSize(24),
        height:getSize(24),
        marginTop:getSize(10),
        marginRight:getSize(8),
        color:'#ccc'
    }
})


export const cardStyle = StyleSheet.create({
    card:{
        paddingLeft:getSize(16),
        paddingRight:getSize(16),
        marginTop:getSize(12)
    },
    label:{
        marginLeft:getSize(16),
        fontSize:getSize(14),
        lineHeight:getSize(20),
        height:getSize(20),
    },
    ipt:{
        marginTop:getSize(5),
        height:getSize(52),
        borderRadius:getSize(8),
        paddingLeft:getSize(16),
        borderWidth:getSize(0.5),
        borderColor:'#d8d8d8',
        backgroundColor:'#fff'
    }
})