import {StyleSheet} from 'react-native';
import {getSize, WindowWidth,MyStyleSheetCreate} from '../../utils'


export const reportProductsStyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff',
        width:WindowWidth,
        
    },
    tabBar:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    footer:{
        height:89,
        width:300
    }
})


export const cardStyle=MyStyleSheetCreate({
    container:{
        width:(375-32),
        paddingTop:28,
        height:28+193+8+22+1+17,
        marginLeft:16
    },
    img:{
        width:(375-32),
        height:193,
        borderRadius:4
    },
    title:{
        height:22,
        marginTop:8,
        fontSize:16,
        color:'#333'
    },
    date:{
        height:17,
        marginTop:1,
        fontSize:12,
        color:'#999'
    }
})