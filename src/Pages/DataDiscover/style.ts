// import {StyleSheet,ViewStyle} from 'react-native';
import { getSize ,MyStyleSheetCreate} from '../../utils';
import styles from '../../style';


export const dataDiscoverStyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#f8f6f6',
        // paddingTop:20
        // position:'absolute',
        // top:44
    },
    flat_list:{
        flex:1,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        backgroundColor:'#fff'
    },
    tags:{
        height:44+12,
        flexDirection:'row',
        width:375,
    },
    footer:{
        height:44+12+29,
        width:200
    }
})


export const tagsStyle=MyStyleSheetCreate({
    topic_container:{
        height:44,
        paddingTop:11,
        backgroundColor:'#fff'
    },
    topic:{
        marginLeft:16,
        height:22,
        flexDirection:'row',
        marginRight:16
    },
    image:{
        width:20,
        height:20
    },
    text:{
        fontSize:15,
        marginLeft:4
    }
})