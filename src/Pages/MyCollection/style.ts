

import {StyleSheet} from 'react-native';
import {getSize,WindowHeight,WindowWidth,MyStyleSheetCreate} from '../../utils';


export const pageStyle=({

    container:{
        // flex:1,
        height:WindowHeight,
        backgroundColor:'#fff',

    },
    flatList:{
        position:'absolute',
        width:36+WindowWidth,
        top:40,
        height:WindowHeight-getSize(40),
        backgroundColor:'#fff'
    },
    footer:{
        width:300,
        height:40
    }
})


export const tabBarStyle=MyStyleSheetCreate({

    right:{
        marginTop:8,
        height:24,
        fontSize:17,
        marginRight:8
    },
    right_set:{
        color:'#666'
    },
    right_cancal:{
        color:'#f75c2f'
    }


})

export const cardStyle=MyStyleSheetCreate({

    card_container:{
        flexDirection:'row',
        alignItems:'center'
    },
    card_imgContainer:{
        width:20,
        height:20,
        borderRadius:10,
        marginLeft:16,
        backgroundColor:'#fff',
        borderColor:'#333',
        borderWidth:1/3.5
        // marginTop:
    },
    img:{
        width:20,
        height:20
    }
})


export const bottomStyle = MyStyleSheetCreate({
    bottom:{
        position:'absolute',
        bottom:0,
        width:WindowWidth,
        height:44,
        flexDirection:'row',
        paddingTop:10,
    },
    text:{
        fontSize:17,
        lineHeight:24,
        // marginTop:10
    },
    select:{
        // ...this.text,
        fontSize:17,
        lineHeight:24,
        marginLeft:16,
        flex:1,
        color:'#666'
    },
    cancel:{
        // ...this.text,
        fontSize:17,
        lineHeight:24,
        marginRight:16,
        color:'#ccc'
    },
    cancel_all:{
        color:'#f75c2f'
    }

})