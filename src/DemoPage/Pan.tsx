import * as React from 'react';
import { View,StyleSheet,PanResponder,PanResponderInstance} from 'react-native';
import {WindowHeight,MyStyleSheetCreate} from '../utils';


const style=MyStyleSheetCreate({
    main:{
       flex:1,
       position:'relative',
       top:-50
    },
    v1:{
        height:WindowHeight/2,
        backgroundColor:'#9f3'
    },
    v2:{
        height:WindowHeight/2,
        backgroundColor:'#f90'
    },
    v3:{
        height:WindowHeight/2,
        backgroundColor:'#0f9'
    },
    v0:{
        height:50,
        backgroundColor:'#222'
    }
})

export default class Pan extends React.Component{

    preTop:number = -50;

    sr:any;
    _panResponder:PanResponderInstance;

    componentWillMount(){
        const _this=this;
        this._panResponder = PanResponder.create({
            // 要求成为响应者：
            onStartShouldSetPanResponder: (evt, gestureState) => true,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
            onMoveShouldSetPanResponder: (evt, gestureState) => true,
            onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      
            onPanResponderGrant: (evt, gestureState) => {
              // 开始手势操作。给用户一些视觉反馈，让他们知道发生了什么事情！
      
              // gestureState.{x,y} 现在会被设置为0
            //   console.log('grant', gestureState)
            },
            onPanResponderMove: (evt, gestureState) => {
              // 最近一次的移动距离为gestureState.move{X,Y}
      
              // 从成为响应者开始时的累计手势移动距离为gestureState.d{x,y}
              
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
                    top:-50
                }
            })
            this.preTop=-50;
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
            <View style={style.main} {...this._panResponder.panHandlers} ref={c=>this.sr=c}>
                <View style={style.v0}/>
                <View style={style.v1}/>
                <View style={style.v2}/>
                <View style={style.v3}/>
            </View>
        )
    }
}