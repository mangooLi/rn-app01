import {StyleSheet} from 'react-native'
import { getSize } from '../../utils';

export const detailStyle=StyleSheet.create({

    pageContainer:{
        flex:1,
        flexDirection:'column'
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

    },
    thumnb_nail:{
        width:getSize(375),
        height:getSize(120)
    },
    title:{
        ...common

    },
    content:{
        ...common,

    },
    
})