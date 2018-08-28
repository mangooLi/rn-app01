


import {StyleSheet} from 'react-native';

import { getSize ,MyStyleSheetCreate} from '../../utils';

export const pageStyle = MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff'
    },
    title:{
        fontSize:13,
        lineHeight:18,
        height:40,
        paddingTop:14,
        borderBottomWidth:0.5,
        borderBottomColor:'#c8c7cc',
        paddingLeft:15
    },
    title_about_us:{
        marginTop:15
    },
    line:{
        paddingLeft:15,
        paddingRight:14,
        flexDirection:'row',
        height:45,
        paddingTop:10
    },
    line_text:{
        fontSize:14,
        lineHeight:24,
    },
    line_left:{
        fontSize:14,
        lineHeight:24,
        color:'#000',
        flex:1
    },
    line_right:{
        fontSize:14,
        lineHeight:24,
        color:'#000'
    },
    line_img:{
        width:8,
        marginTop:6,
        height:13
    }
}) 