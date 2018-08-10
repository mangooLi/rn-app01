import {StyleSheet,ViewStyle} from 'react-native'
import { getSize } from '../../utils';
import { WindowWidth } from '../../constant';

const common={
    width:getSize(375-32),
    marginLeft:getSize(16)
}


export const detailStyle=StyleSheet.create({

    pageContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#f8f6f6'
    },

    tabBar:{
        height:getSize(44),
        flexDirection:'row'

    },
    container:{
        flexGrow:1,
        backgroundColor:'#fff'
    },
    tagBar:{
        height:getSize(40),
        width:getSize(375),
        borderTopWidth:getSize(0.3),
        borderTopColor:'#333',
        borderBottomWidth:getSize(0.3),
        borderBottomColor:'#333',
        flexDirection:'row'
    },
    none:{
        width:getSize(375),
        height:getSize(40+8),
        backgroundColor:'#f8f6f6'
    },
})

export const tabBarStyle=Object.create({
   img:{
    marginTop:getSize(10),
    marginLeft:getSize(10),
    width:getSize(20),
    height:getSize(20)
   },
   none:{
       flexGrow:1
   },
   share:{
       marginRight:getSize(10)
   }
})


export const articleStyle=StyleSheet.create({
    tag:{
       ...common,
       height:getSize(17),
       marginTop:getSize(20),
       fontSize:getSize(12),
       color:'#f55c39'


    },
    thumnb_nail:{
        width:getSize(375),
        height:getSize(211),
        marginTop:getSize(24)
    },
    title:{
        width:getSize(375-32),
        marginLeft:getSize(16),
        marginTop:getSize(8),
        fontSize:getSize(22),
        lineHeight:getSize(30)
    },
    author:{
        ...common,
        height:getSize(18),
        fontSize:getSize(13),
        marginTop:getSize(8),
        color:'#999'
    },
    content:{
        marginTop:getSize(24),
        ...common,

    },
    laboindex:{
        ...common,
        fontSize:getSize(18),
        lineHeight:getSize(30),
        color:'#999',
        marginTop:getSize(24),
        marginBottom:getSize(28)
    }
    
})

export const recommendationStyle=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        borderRadius:getSize(10),
        marginTop:getSize(8),
        marginBottom:getSize(8)
    },
    title:{
        height:getSize(28),
        fontSize:getSize(20),
        textAlign:'center',
        color:'#333',
        marginTop:getSize(33)
    }
})

export const informationCardStyle=StyleSheet.create({
    container:{
        // ...common,
        borderRadius:getSize(10),
        width:WindowWidth,
        paddingLeft:getSize(16),
        paddingRight:getSize(16),
        marginTop:getSize(8),
        backgroundColor:'#fff'
    },
    title:{
        fontSize:getSize(20),
        lineHeight:getSize(28),
        color:'#333',
        marginTop:getSize(44)
    },
    content:{
        width:getSize(375-32),
        marginTop:getSize(16),
        marginBottom:getSize(16)
    },
    imgContainer:{
        // ...common,
        marginTop:getSize(20),
        marginBottom:getSize(20),
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
    },
    img:{
        width:getSize(111),
        height:getSize(111)
    },
    link:{
        fontSize:getSize(14),
        lineHeight:getSize(30),
        color:'#fd5c3a',
        marginBottom:getSize(12)
    },
    video:{
        width:getSize(343),
        height:getSize(193),
        marginTop:getSize(20),
        marginBottom:getSize(20)
    }
})

export const tagBarStyle = StyleSheet.create({
    img:{
        width:getSize(24),
        height:getSize(24),
        marginLeft:getSize(15),
        marginTop:getSize(9.5)
    },
    text:{
        flex:1,
        fontSize:getSize(16),
        height:getSize(22),
        lineHeight:getSize(22),
        marginTop:getSize(10.5),
        marginLeft:getSize(7)
    },
    right:{
        width:getSize(8),
        height:getSize(13),
        marginTop:getSize(15),
        marginRight:getSize(15)
    }
})