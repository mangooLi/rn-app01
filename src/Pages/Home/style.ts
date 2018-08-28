import {StyleSheet} from 'react-native';
import {getSize, WindowWidth,WindowHeight,MyStyleSheetCreate} from '../../utils';


export const pageStyle=MyStyleSheetCreate({
    scroll:{
        // width:WindowWidth*3
    }
})



export const animateStyle ={
    one:{
        backgroundColor:'#fff',
        width:WindowWidth,
        paddingTop:40,
        zIndex:12,
        justifyContent:'space-around',
        alignContent:'center',
        position:'absolute',
    },
    two:{
        backgroundColor:'#369af5',
        width:WindowWidth,
        height:WindowHeight,
        zIndex:10,
        // marginTop:-44
    },
    text:{
        width:WindowHeight/2,
        height:100,
        backgroundColor:'#36fff5'
    }
}

export const homeContainerStyle=MyStyleSheetCreate({
    container:{
        backgroundColor:'#000',
        height:WindowHeight
    }
})