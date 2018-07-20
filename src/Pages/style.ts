import {getSize} from '../utils';

import {StyleSheet,ViewStyle} from 'react-native';


export const homeStyle=StyleSheet.create({
    
        container:{
            // paddingLeft:getSize(16),
            // paddingRight:getSize(16),
            flexDirection:'row',
        },
        img:{
            width:getSize(148),
            height:getSize(83),
            // paddingLeft:getSize(16)
        },
        view:{
            // flexGrow:1,
            // width:'100%',
            marginLeft:getSize(12),
            marginRight:getSize(12),
            // paddingLeft:getSize(12),
            backgroundColor:'#ef9',
            borderColor:'red',
            // borderWidth:1,
            overflow:'hidden',

        },
        view_author:{
            fontSize:getSize(12),
            color:'#ee5e2b'
        },
        view_title:{
            fontSize:getSize(14),
            color:'#333333',
            width:'50%'
        },
        view_date:{
            fontSize:getSize(12),
            color:'#999'
        },
        view_right:{
            width:'100%'
        }
    
})

