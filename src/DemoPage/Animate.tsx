import React,{Component} from 'react';
import {View,Text,Animated} from 'react-native';
import {animateStyle} from './style'
import { WindowWidth, WindowHeight } from '../utils';

export default class Animate extends Component {

    
    state={
        position_left:new Animated.Value(0),
        position_top:new Animated.Value(0),
        // height:new Animated.Value(WindowHeight)
        scaleY:new Animated.Value(1)
    }
    toogle:boolean = false;
    handlePress(){
        console.log('press')
        if(this.toogle){
           this.expand();
           this.toogle = false;
        }else{
            this.fold()
            this.toogle = true;
        }

        
    }

    expand(){
        Animated.parallel([
            Animated.timing(this.state.position_left,{toValue:0,duration:1000}),
            // Animated.timing(this.state.position_top,{toValue:0,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:1,duration:1000})
        ]).start()
    }
    fold(){
        Animated.parallel([
            Animated.timing(this.state.position_left,{toValue:-WindowWidth/2,duration:1000}),
            // Animated.timing(this.state.position_top,{toValue:WindowHeight*0.1,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:0.8,duration:1000})
        ]).start()
    }

    render (){
        return (
            <View >
                <Animated.View style={{...animateStyle.one,left:this.state.position_left,top:this.state.position_top,scaleY:this.state.scaleY}}> 

                    <Text onPress={()=>this.handlePress()} style={animateStyle.text}>animated</Text>
                </Animated.View>
                <View style={animateStyle.two}>

                </View>
                
            </View>
        )
    }
}