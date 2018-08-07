
import {StyleSheet} from 'react-native';
import {getSize} from '../../utils';
export const tagsStyle=StyleSheet.create({
    tags:{
        height:getSize(44),
        width:getSize(375),


    },
    topic_container:{
        height:getSize(44),
        paddingTop:getSize(11),
        backgroundColor:'#fff',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'#c8c7cc',
    },
    topic:{
        marginLeft:getSize(16),
        height:getSize(22),
        flexDirection:'row',
        marginRight:getSize(16)
    },
    image:{
        width:getSize(20),
        height:getSize(20)
    },
    text:{
        fontSize:getSize(15),
        marginLeft:getSize(4)
    }
})

export const listStyle = StyleSheet.create({
    flat_list:{
        backgroundColor:'#fff',

    },
    footer:{
        width:getSize(300),
        height:getSize(40+40)
    }
})

export const cardContainerStyle=StyleSheet.create({
    container:{
        marginTop:getSize(24),
        marginBottom:getSize(36)
    }
})