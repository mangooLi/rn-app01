import * as React from 'react';
import { View,ScrollView,StyleSheet,PanResponder,PanResponderInstance} from 'react-native';
import {WindowHeight} from '../utils';


const style=StyleSheet.create({
    main:{
       flex:1,
       position:'relative',
    //    top:-50
    },
    
})

interface Props{
    refreshElement:any;
    refreshElementHeight:number
}

export default class PullToRefresh extends React.Component<Props>{

    preTop:number = 0;

    sr:any;
    _panResponder:PanResponderInstance;

    componentWillMount(){

        this.preTop= -this.props.refreshElementHeight 
        const _this=this;
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
            
            onPanResponderMove: (evt, gestureState) => {
             
              
            const {dy}=gestureState;
                
            this.preTop = (dy+this.preTop)>0?0:(dy+this.preTop)
            console.log('move', gestureState.dy,this.preTop);
            
            _this.sr.setNativeProps({
                    style:{
                        top:this.preTop
                    }
                })
              
            },

            onPanResponderTerminationRequest: (evt, gestureState) => true,
            onPanResponderRelease: (evt, gestureState) => {
              // 用户放开了所有的触摸点，且此时视图已经成为了响应者。

              console.log('end pan')

              _this.sr.setNativeProps({
                style:{
                    top:-this.props.refreshElementHeight
                }
            })
            this.preTop=-this.props.refreshElementHeight
            },
            onPanResponderTerminate: (evt, gestureState) => {
              // 另一个组件已经成为了新的响应者，所以当前手势将被取消。
            },
            onShouldBlockNativeResponder: (evt, gestureState) => {
              // 返回一个布尔值，决定当前组件是否应该阻止原生组件成为JS响应者
              // 默认返回true。目前暂时只支持android。
              return true;
            },
          });
    }

    render(){
        return (
            <View style={[style.main,{top:-this.props.refreshElementHeight}]} {...this._panResponder.panHandlers} ref={c=>this.sr=c}>
                {this.props.refreshElement}
                {this.props.children}
            </View>
        )
    }
}