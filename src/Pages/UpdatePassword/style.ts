

import {StyleSheet} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';


export const pageStyle = MyStyleSheetCreate({
    container:{
        flex:1,
        backgroundColor:'#fafafa'
    },
    rightIcon:{
        fontSize:17,
        lineHeight:24,
        height:24,
        marginTop:10,
        marginRight:8,
        color:'#ccc'
    }
})


export const cardStyle = MyStyleSheetCreate({
    card:{
        paddingLeft:16,
        paddingRight:16,
        marginTop:12
    },
    label:{
        marginLeft:16,
        fontSize:14,
        lineHeight:20,
        height:20,
    },
    ipt:{
        marginTop:5,
        height:52,
        borderRadius:8,
        paddingLeft:16,
        borderWidth:0.5,
        borderColor:'#d8d8d8',
        backgroundColor:'#fff'
    }
})