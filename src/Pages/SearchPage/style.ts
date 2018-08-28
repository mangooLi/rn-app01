


import {StyleSheet} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../../utils';




export const pageStyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff',
        flex:1,
        // height:WindowHeight
    }
})

export const tabBarStyle=MyStyleSheetCreate({
    tabBar:{
        height:40,
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    imgContainer:{
        position:'absolute',
        left:10,
        top:10,
        zIndex:1000,
    },
    img:{
        width:20,
        height:20,
    },
    text:{
        marginTop:8,
        height:24,
        flexGrow:1,
        fontSize:17,
        textAlign:'center',
        zIndex:100
    },
    search:{
        width:20,
        height:20,
        position:'absolute',
        left:50+4,
        top:8,
        zIndex:100
    }
})


export const inputBarStyle=MyStyleSheetCreate({
    input:{
        width:276,
        height:30,
        padding: 0,
        borderRadius: 5,
        marginLeft:46,
        marginTop:4,
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        paddingLeft:8+20,
        zIndex:99,

    },
    text_container:{
    },
    text:{
        marginTop:8,
        width:34,
        fontSize:17,
        marginLeft:8
    }
})

export const listStyle=MyStyleSheetCreate({
    container:{
        marginTop:16,
        marginBottom:24
    },
    item:{
        width:343,
        marginLeft:16
    },
    tags:{
        color:'#f85d1f',
        height:17,
        fontSize:12
    },
    title:{
        fontSize:16,
        lineHeight:20,
        color:'#333',
        marginTop:2
    },
    summary:{
        fontSize:13,
        color:'#999',
        marginTop:2
    },
    date:{
        fontSize:12,
        marginTop:1,
        color:'#999'
    },
    footer:{
        height:40,
        width:300
    }
})