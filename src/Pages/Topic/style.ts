


import {StyleSheet} from 'react-native';
import {getSize,MyStyleSheetCreate, WindowHeight} from '../../utils'

export const topicStyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff',
        height:WindowHeight
    },
    tabBar:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:1/3.5,
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    footer:{
        height:98,
        width:300
    }
})


export const tabBarStyle=MyStyleSheetCreate({
    

    img:{
        marginTop:10,
        marginLeft:10,
        width:20,
        height:20
    },
    text:{
        marginTop:8,
        height:24,
        // width:70,
        flexGrow:1,
        fontSize:17,
        textAlign:'center'
    }
})
