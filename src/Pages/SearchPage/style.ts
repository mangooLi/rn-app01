


import {StyleSheet} from 'react-native';
import {getSize} from '../../utils';




export const pageStyle=StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        // height:WindowHeight
    }
})

export const tabBarStyle=StyleSheet.create({
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    imgContainer:{
        position:'absolute',
        left:getSize(10),
        top:getSize(10),
        zIndex:1000,
    },
    img:{
        width:getSize(20),
        height:getSize(20),
    },
    text:{
        marginTop:getSize(8),
        height:getSize(24),
        flexGrow:1,
        fontSize:getSize(17),
        textAlign:'center',
        zIndex:100
    },
    search:{
        width:getSize(20),
        height:getSize(20),
        position:'absolute',
        left:getSize(50+4),
        top:getSize(8),
        zIndex:100
    }
})


export const inputBarStyle=StyleSheet.create({
    input:{
        width:getSize(276),
        height:getSize(30),
        padding: 0,
        borderRadius: getSize(5),
        marginLeft:getSize(46),
        marginTop:getSize(4),
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:getSize(1),
        paddingLeft:getSize(8+20),
        zIndex:99,

    },
    text_container:{
    },
    text:{
        marginTop:getSize(8),
        width:getSize(34),
        fontSize:getSize(17),
        marginLeft:getSize(8)
    }
})

export const listStyle=StyleSheet.create({
    container:{
        marginTop:getSize(16),
        marginBottom:getSize(24)
    },
    item:{
        width:getSize(343),
        marginLeft:getSize(16)
    },
    tags:{
        color:'#f85d1f',
        height:getSize(17),
        fontSize:getSize(12)
    },
    title:{
        fontSize:getSize(16),
        lineHeight:getSize(20),
        color:'#333',
        marginTop:getSize(2)
    },
    summary:{
        fontSize:getSize(13),
        color:'#999',
        marginTop:getSize(2)
    },
    date:{
        fontSize:getSize(12),
        marginTop:getSize(1),
        color:'#999'
    },
    footer:{
        height:getSize(40),
        width:getSize(300)
    }
})