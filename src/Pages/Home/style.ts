import {StyleSheet} from 'react-native';
import {getSize, WindowWidth,WindowHeight} from '../../utils';


export const pageStyle=StyleSheet.create({
    scroll:{
        // width:WindowWidth*3
    }
})



export const animateStyle ={
    one:{
        backgroundColor:'#fa9842',
        width:WindowWidth,
        paddingTop:getSize(40),
        // height:WindowHeight-getSize(80),

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
        height:getSize(100),
        backgroundColor:'#36fff5'
    }
}