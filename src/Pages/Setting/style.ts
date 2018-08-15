


import {StyleSheet} from 'react-native';

import { getSize } from '../../utils';

export const pageStyle = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    title:{
        fontSize:getSize(13),
        lineHeight:getSize(18),
        height:getSize(40),
        paddingTop:getSize(14),
        borderBottomWidth:getSize(0.5),
        borderBottomColor:'#c8c7cc',
        paddingLeft:getSize(15)
    },
    title_about_us:{
        marginTop:getSize(15)
    },
    line:{
        paddingLeft:getSize(15),
        paddingRight:getSize(14),
        flexDirection:'row',
        height:getSize(45),
        paddingTop:getSize(10)
    },
    line_text:{
        fontSize:getSize(14),
        lineHeight:getSize(24),
    },
    line_left:{
        fontSize:getSize(14),
        lineHeight:getSize(24),
        color:'#000',
        flex:1
    },
    line_right:{
        fontSize:getSize(14),
        lineHeight:getSize(24),
        color:'#000'
    },
    line_img:{
        width:getSize(8),
        marginTop:getSize(6),
        height:getSize(13)
    }
}) 