import {StyleSheet,FlexStyle} from 'react-native';
import {getSize, WindowWidth} from '../../utils';


export const pageStyle=StyleSheet.create({
    scroll:{
        // width:WindowWidth*3
    }
})

export const barStyle=StyleSheet.create({
    bar:{
        height:getSize(40),
        flexDirection:'row',
        paddingTop:getSize(31-24),
        backgroundColor:'#fff',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'#999'
    },
    text:{
        fontSize:getSize(16),
        height:getSize(22),
        lineHeight:getSize(22),
        marginLeft:getSize(20),
        marginRight:getSize(4)
    },
    all:{
        
    },
    report:{
        fontSize:getSize(16),
        height:getSize(22),
        lineHeight:getSize(22),
        marginLeft:getSize(20),
        flex:1
    },
    img_account:{
        marginLeft:getSize(16),
        marginRight:getSize(12)
    }
})