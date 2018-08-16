

import {StyleSheet} from 'react-native';

import {getSize} from '../../utils';


export const cmpStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:getSize(49),
        borderTopWidth:getSize(0.5),
        borderTopColor:'#f8f8f8',
        backgroundColor:'#f8f8f8'
    },
    
    part:{
        flex:1,
        alignItems:'center'
    },
    icon:{
        width:getSize(24),
        height:getSize(24),
        marginTop:getSize(7),
    },
    text:{
        fontSize:getSize(10),
        height:getSize(14),
        lineHeight:getSize(14),
        textAlign:'center',
        marginTop:getSize(4)
    }
})