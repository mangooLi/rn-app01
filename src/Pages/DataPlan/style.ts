import {StyleSheet} from 'react-native'
import { getSize } from '../../utils';



export const dataPlanstyle=StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    card:{
        paddingBottom:getSize(35)
    },
    dataLabContainer0:{
        marginTop:getSize(17)
    },
    dataLabContainer1:{
        marginTop:getSize(31)
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