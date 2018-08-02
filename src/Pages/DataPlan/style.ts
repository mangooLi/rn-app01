import {StyleSheet} from 'react-native'
import { getSize } from '../../utils';



export const dataPlanstyle=StyleSheet.create({
    container:{
        backgroundColor:'#f8f6f6',
        paddingBottom:getSize(40)
    },
    card:{
        paddingBottom:getSize(35),
        marginBottom:getSize(12),
        backgroundColor:'#fff',
        borderRadius:getSize(8)
    },
    dataLabContainer0:{
        marginTop:getSize(17)
    },
    dataLabContainer1:{
        marginTop:getSize(31)
    },
    fiftyContainer:{
        marginTop:getSize(28)
    },
    tabBar:{
        height:getSize(40),
        backgroundColor:'#f6f4f4',
        flexDirection:'row',
        paddingTop:getSize(10)
    }
})




export const cardHeadStyle=StyleSheet.create({
    container:{
        flexDirection:'row',
        paddingLeft:getSize(16),
        paddingRight:getSize(16),
        marginBottom:getSize(5)
    },
    logo:{
        width:getSize(27),
        height:getSize(27),
        marginTop:getSize(20)
    },
    title:{
        flex:1,
        marginTop:getSize(25),
        height:getSize(21),
        fontSize:getSize(15),
        color:`#fd5b3a`,
        paddingLeft:getSize(4)
    },
    text:{
        width:getSize(70),
        marginTop:getSize(25),
        height:getSize(21),
        fontSize:getSize(15),
        color:'#aaa'
    },
    right:{
        width:getSize(17),
        height:getSize(17),
        marginTop:getSize(27)
    }
})


export const fiftyStyle=StyleSheet.create({
    container:{
        width:getSize(375-32),
        height:getSize(132+3),
        marginLeft:getSize(16),
        flexDirection:'row',

    },
    img:{
        width:getSize(99),
        height:getSize(132),
        marginTop:getSize(3),
        borderRadius:getSize(8)
    },
    person:{
        width:getSize(375-32-99),
        paddingLeft:getSize(16)
    },
    name:{
        height:getSize(25),
        fontSize:getSize(18),
        color:'#333'
    },
    introduction:{
        marginTop:getSize(3),
        fontSize:getSize(13),
    }
})

export const tabBarStyle=StyleSheet.create({
    title:{
        fontSize:getSize(17),
        color:'#131313',
        width:'100%',
        textAlign:'center'
    },
    nav:{
        position:'absolute',
        right:0,
        marginRight:getSize(8),
        top:getSize(10),
        fontSize:getSize(17),
        color:'#666',
        
    }
})