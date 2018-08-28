import {StyleSheet} from 'react-native';
import { getSize, WindowHeight ,MyStyleSheetCreate} from '../../../utils';

export const pageStyle = MyStyleSheetCreate({
    container:{
        // flex:1,
        paddingLeft:214,
        height:WindowHeight
        // backgroundColor:'linearGradient(red,blue)'
    },

    avater_container:{
        width:88+8,
        height:88+8,
        borderRadius:44+4,
        borderWidth:4,
        borderColor:'#fff',
        marginTop:getSize(50-24+40),
        backgroundColor:'#fff'
    },
    avater:{
        width:88,
        height:88,
        borderRadius:44,
        position:'relative',
        // top:4,
        // left:4
    },
    key:{
        width:30,
        height:16,
        position:'relative',
        left:29,
        top:36
    },
    userName:{
        width:88+8,
        textAlign:'center',
        fontSize:22,
        lineHeight:30,
        color:'#fff',
        marginTop:4,
        marginBottom:81
    },
    link:{
        height:22,
        flexDirection:'row',
        marginTop:36
    },
    link_img:{
        width:22,
        height:22,
        marginRight:12
    },
    link_text:{
        fontSize:16,
        lineHeight:22,
        color:'#fff'
    }
})