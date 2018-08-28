// import {StyleSheet,ViewStyle} from 'react-native'
import { getSize ,MyStyleSheetCreate} from '../../utils';
import { WindowWidth } from '../../constant';

const common={
    width:getSize(375-32),
    marginLeft:16
}


export const detailStyle=MyStyleSheetCreate({

    pageContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#f8f6f6'
    },

    tabBar:{
        height:44,
        flexDirection:'row'

    },
    container:{
        flexGrow:1,
        backgroundColor:'#fff'
    },
    tagBar:{
        height:40,
        width:375,
        borderTopWidth:0.3,
        borderTopColor:'#333',
        borderBottomWidth:0.3,
        borderBottomColor:'#333',
        flexDirection:'row'
    },
    none:{
        width:375,
        height:40+8,
        backgroundColor:'#f8f6f6'
    },
})

export const tabBarStyle=Object.create({
   img:{
    marginTop:10,
    marginLeft:10,
    width:20,
    height:20
   },
   none:{
       flexGrow:1
   },
   share:{
       marginRight:10
   }
})


export const articleStyle=MyStyleSheetCreate({
    tag:{
       ...common,
       height:17,
       marginTop:20,
       fontSize:12,
       color:'#f55c39'


    },
    thumnb_nail:{
        width:375,
        height:211,
        marginTop:24
    },
    title:{
        width:getSize(375-32),
        marginLeft:16,
        marginTop:8,
        fontSize:22,
        lineHeight:30
    },
    author:{
        ...common,
        height:18,
        fontSize:13,
        marginTop:8,
        color:'#999'
    },
    content:{
        marginTop:24,
        ...common,

    },
    laboindex:{
        ...common,
        fontSize:18,
        lineHeight:30,
        color:'#999',
        marginTop:24,
        marginBottom:28
    }
    
})

export const recommendationStyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#fff',
        borderRadius:10,
        marginTop:8,
        marginBottom:8
    },
    title:{
        height:28,
        fontSize:20,
        textAlign:'center',
        color:'#333',
        marginTop:33
    }
})

export const informationCardStyle=MyStyleSheetCreate({
    container:{
        // ...common,
        borderRadius:10,
        width:WindowWidth,
        paddingLeft:16,
        paddingRight:16,
        marginTop:8,
        backgroundColor:'#fff'
    },
    title:{
        fontSize:20,
        lineHeight:28,
        color:'#333',
        marginTop:44
    },
    content:{
        width:getSize(375-32),
        marginTop:16,
        marginBottom:16
    },
    imgContainer:{
        // ...common,
        marginTop:20,
        marginBottom:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    img:{
        width:111,
        height:111
    },
    link:{
        fontSize:14,
        lineHeight:30,
        color:'#fd5c3a',
        marginBottom:12
    },
    video:{
        width:343,
        height:193,
        marginTop:20,
        marginBottom:20
    }
})

export const tagBarStyle = MyStyleSheetCreate({
    img:{
        width:24,
        height:24,
        marginLeft:15,
        marginTop:9.5
    },
    text:{
        flex:1,
        fontSize:16,
        height:22,
        lineHeight:22,
        marginTop:10.5,
        marginLeft:7
    },
    right:{
        width:8,
        height:13,
        marginTop:15,
        marginRight:15
    }
})