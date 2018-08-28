
import {StyleSheet} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';
export const tagsStyle=MyStyleSheetCreate({
    tags:{
        height:44,
        width:375,


    },
    topic_container:{
        height:44,
        paddingTop:11,
        backgroundColor:'#fff',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'#c8c7cc',
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

export const listStyle = MyStyleSheetCreate({
    flat_list:{
        backgroundColor:'#fff',

    },
    footer:{
        width:300,
        height:40+40
    }
})

export const cardContainerStyle=MyStyleSheetCreate({
    container:{
        marginTop:24,
        marginBottom:36
    }
})