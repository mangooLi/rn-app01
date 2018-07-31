import {StyleSheet} from 'react-native';
import {getSize} from '../../utils'

export const reportProductsStyle=StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    tabBar:{
        height:getSize(40),
        flexDirection:'row',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'rgba(0,0,0,0.2)'
    },
    footer:{
        height:getSize(28),
        width:getSize(300)
    }
})


export const cardStyle=StyleSheet.create({
    container:{
        width:getSize(375-32),
        paddingTop:getSize(28),
        height:getSize(28+193+8+22+1+17),
        marginLeft:getSize(16)
    },
    img:{
        width:getSize(375-32),
        height:getSize(193),
        borderRadius:getSize(4)
    },
    title:{
        height:getSize(22),
        marginTop:getSize(8),
        fontSize:getSize(16),
        color:'#333'
    },
    date:{
        height:getSize(17),
        marginTop:getSize(1),
        fontSize:getSize(12),
        color:'#999'
    }
})