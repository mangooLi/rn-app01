

import {StyleSheet} from 'react-native';
import { getSize,WindowHeight ,MyStyleSheetCreate} from '../../utils';




export const tabstyle=MyStyleSheetCreate({
    tabContainer:{
        width:375,
        // height:WindowHeight-40,
        backgroundColor:'#fff'
    },
    item:{
        height:20,
        width:70
    }
})

export const columnStyle = MyStyleSheetCreate({
    flat_list:{
        backgroundColor:'#fff',

    },
    footer:{
        width:300,
        height:40+40
    }
})

export const tagsStyle=MyStyleSheetCreate({
    tags:{
        height:44+12,
        flexDirection:'row',
        width:375,
        
    },
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