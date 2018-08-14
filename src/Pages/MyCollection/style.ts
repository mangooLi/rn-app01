

import {StyleSheet} from 'react-native';
import {getSize,WindowHeight,WindowWidth} from '../../utils';


export const pageStyle=StyleSheet.create({

    container:{
        // flex:1,
        height:WindowHeight,
        backgroundColor:'#fff',

    },
    flatList:{
        position:'absolute',
        width:getSize(36)+WindowWidth,
        top:getSize(40),
        height:WindowHeight-getSize(40),
        backgroundColor:'#9c0'
    },
    footer:{
        width:getSize(300),
        height:getSize(40)
    }
})


export const tabBarStyle=StyleSheet.create({

    right:{
        marginTop:getSize(8),
        height:getSize(24),
        fontSize:getSize(17),
        marginRight:getSize(8)
    },
    right_set:{
        color:'#666'
    },
    right_cancal:{
        color:'#f75c2f'
    }


})

export const cardStyle=StyleSheet.create({

    card_container:{
        flexDirection:'row',
        alignItems:'center'
    },
    card_imgContainer:{
        width:getSize(20),
        height:getSize(20),
        borderRadius:getSize(10),
        marginLeft:getSize(16),
        backgroundColor:'#fff',
        borderColor:'#333',
        borderWidth:getSize(1/3.5)
        // marginTop:getSize()
    },
    img:{
        width:getSize(20),
        height:getSize(20)
    }
})


export const bottomStyle = StyleSheet.create({
    bottom:{
        position:'absolute',
        bottom:0,
        width:WindowWidth,
        height:getSize(44),
        flexDirection:'row',
        paddingTop:getSize(10),
    },
    text:{
        fontSize:getSize(17),
        lineHeight:getSize(24),
        // marginTop:getSize(10)
    },
    select:{
        // ...this.text,
        fontSize:getSize(17),
        lineHeight:getSize(24),
        marginLeft:getSize(16),
        flex:1,
        color:'#666'
    },
    cancel:{
        // ...this.text,
        fontSize:getSize(17),
        lineHeight:getSize(24),
        marginRight:getSize(16),
        color:'#ccc'
    },
    cancel_all:{
        color:'#f75c2f'
    }

})