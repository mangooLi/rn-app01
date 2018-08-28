
import {StyleSheet} from 'react-native';
import {getSize,WindowHeight,WindowWidth,MyStyleSheetCreate} from '../../utils'

export const reportDetailStyle=MyStyleSheetCreate({

    container:{
        backgroundColor:'#fff',
        height:WindowHeight
    },
    tabBar:{
        height:40,
        flexDirection:'row'
    },
    pdf: {
        width: WindowWidth,
        height:WindowHeight-40,

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
        width:175,
        marginLeft:70,
        marginTop:8,
        height:24,
        fontSize:17,

    }
})