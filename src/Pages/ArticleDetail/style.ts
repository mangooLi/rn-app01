import {StyleSheet} from 'react-native'
import { getSize } from '../../utils';

export const detailStyle=StyleSheet.create({

    pageContainer:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff'
    },

    tabBar:{
        height:getSize(64)
    },
    container:{
        flexGrow:1

    }
})



const common={
    width:getSize(375-32),
    marginLeft:getSize(16)
}
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
        ...common,
        height:getSize(90),
        fontSize:getSize(22),
        color:'#333',
        marginTop:getSize(8)

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
})