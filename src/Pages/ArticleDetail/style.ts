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