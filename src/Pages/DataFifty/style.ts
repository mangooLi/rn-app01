

// import {StyleSheet,ViewStyle,TextStyle,Dimensions} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';



export const dataFiftyStyle=MyStyleSheetCreate({
    footer:{
        width:300,
        height:40+24
    },
    flatList:{
        backgroundColor:'#fff',
    },
    cardContainer:{
        marginTop:24
    }
})

export const tabBarStyle=MyStyleSheetCreate({
    tabBar:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:1/3.5,
        borderBottomColor:'rgba(0,0,0,0.2)'
    },

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
    },

})