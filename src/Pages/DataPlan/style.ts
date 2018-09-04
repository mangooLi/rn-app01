import {StyleSheet} from 'react-native'
import { getSize ,MyStyleSheetCreate} from '../../utils';



export const dataPlanstyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#f8f6f6',
        paddingBottom:20,
        flex:1
    },
    card:{
        paddingBottom:35,
        marginBottom:12,
        backgroundColor:'#fff',
        borderRadius:8
    },
    dataLabContainer0:{
        marginTop:17
    },
    dataLabContainer1:{
        marginTop:31
    },
    fiftyContainer:{
        marginTop:28
    },
    tabBar:{
        height:40,
        backgroundColor:'#f6f4f4',
        flexDirection:'row',
        paddingTop:10
    }
})




export const cardHeadStyle=MyStyleSheetCreate({
    container:{
        flexDirection:'row',
        paddingLeft:16,
        paddingRight:16,
        marginBottom:5
    },
    logo:{
        width:27,
        height:27,
        marginTop:20
    },
    title:{
        flex:1,
        marginTop:25,
        height:21,
        fontSize:15,
        color:`#fd5b3a`,
        paddingLeft:4
    },
    text:{
        width:70,
        marginTop:25,
        height:21,
        fontSize:15,
        color:'#aaa'
    },
    right:{
        width:17,
        height:17,
        marginTop:27
    }
})


export const fiftyStyle=MyStyleSheetCreate({
    container:{
        width:375-32,
        height:132+3,
        marginLeft:16,
        flexDirection:'row',

    },
    img:{
        width:99,
        height:132,
        marginTop:3,
        borderRadius:8
    },
    person:{
        width:375-32-99,
        paddingLeft:16
    },
    name:{
        height:25,
        fontSize:18,
        color:'#333'
    },
    introduction:{
        marginTop:3,
        fontSize:13,
    }
})

export const tabBarStyle=MyStyleSheetCreate({
    title:{
        fontSize:17,
        color:'#131313',
        width:'100%',
        textAlign:'center'
    },
    
    nav:{
        
        marginRight:8,
        top:10,
        fontSize:17,
        color:'#666',
        zIndex:100
    }
})