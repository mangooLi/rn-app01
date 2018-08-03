

import {StyleSheet} from 'react-native';
import { getSize,WindowHeight } from '../../utils';




export const tabstyle=StyleSheet.create({
    tabContainer:{
        width:getSize(375),
        height:getSize(WindowHeight-getSize(40)),
        backgroundColor:'#fff'
    }
})

export const columnStyle = StyleSheet.create({
    flat_list:{
        backgroundColor:'#fff',

    },
    footer:{
        width:getSize(300),
        height:getSize(40+40)
    }
})