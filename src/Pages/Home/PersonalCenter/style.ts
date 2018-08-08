import {StyleSheet,ViewStyle} from 'react-native';
import { getSize } from '../../../utils';

export const pageStyle = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:getSize(214),
        // backgroundColor:'linearGradient(red,blue)'
    },

    avater:{
        width:getSize(88+8),
        height:getSize(88+8),
        borderRadius:getSize(44+4),
        borderWidth:getSize(4),
        borderColor:'#fff',
        marginTop:getSize(50-24),
        backgroundColor:'#fff'
    },
    key:{
        width:getSize(30),
        height:getSize(16),
        position:'relative',
        left:getSize(29),
        top:getSize(36)
    },
    userName:{
        width:getSize(88+8),
        textAlign:'center',
        fontSize:getSize(22),
        lineHeight:getSize(30),
        color:'#fff',
        marginTop:getSize(4),
        marginBottom:getSize(81)
    },
    link:{
        height:getSize(22),
        flexDirection:'row',
        marginTop:getSize(36)
    },
    link_img:{
        width:getSize(22),
        height:getSize(22),
        marginRight:getSize(12)
    },
    link_text:{
        fontSize:getSize(16),
        lineHeight:getSize(22),
        color:'#fff'
    }
})