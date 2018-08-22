

import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,Animated} from'react-native';
import {observer} from 'mobx-react';
import {WindowWidth, WindowHeight, getSize,} from '../../utils';
import {autorun } from 'mobx';

import {animateStyle} from './style';
import PersonCenter from './PersonalCenter';

import listStore from '../ListModel';


@observer
export default class HomeContainer extends Component {

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }
    // store = new ListModel();


    constructor(props:any){
        super(props)
        autorun(()=>{
            if(listStore.fold){
                this.fold();

            }else{
                this.expand()
            }
        })
    }


    state={
        x:new Animated.Value(0),
        scaleY:new Animated.Value(1),
        scaleX:new Animated.Value(1),
    }

    sc:any;
    folded:boolean = false;

    componentWillUnmount(){
        this.expand()
    }



    toggle(){
        //
        if(this.folded){
            // this.expand();
            listStore.expandPage()
        }else{
            // this.fold()
            listStore.foldPage()
        }
    }

    expand(){
        this.folded = false;
        listStore.expandPage()
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:0,duration:1000}),
            // Animated.timing(this.state.y,{toValue:0,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:1,duration:1000}),
            Animated.timing(this.state.scaleX,{toValue:1,duration:1000})
        ]).start()
    }
    fold(){
        this.folded = true;
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:-WindowWidth/2,duration:1000}),
            // Animated.timing(this.state.y,{toValue:WindowHeight*0.1,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:0.8,duration:1000}),
            Animated.timing(this.state.scaleX,{toValue:0.8,duration:1000}),
        ]).start()
    }

    shouldCapture(){
        // 折叠状态下，拦截事件，让外层响应。非折叠状态下，不拦截，让内层响应
        return this.folded;
    }

    /**
     * 处理首页touch事件
     */
    handleTouch(){
        if(this.folded){ // 折叠状态下，点击主页展开
            this.expand()
            
        }
    }



    render (){
        const {x,scaleY,scaleX}=this.state;

        return (

            <View  style={{backgroundColor:'#f00'}}>
                <TouchableWithoutFeedback onPress={()=>this.handleTouch()} >
                <Animated.View 
                    
                    onStartShouldSetResponderCapture={() =>this.shouldCapture()} // 折叠状态下，不往下面传递事件，阻止子组件捕获事件

                    style={[animateStyle.one,{left:x,transform:[{scaleX},{scaleY}]}]} >
                   

                    <View style={{height:WindowHeight-getSize(80)}}>

                        {this.props.children}
                    </View>


                </Animated.View>
                </TouchableWithoutFeedback>

                <View style={animateStyle.two}>
                    <PersonCenter />
                </View>

                <View style={{height:getSize(40),position:"absolute",top:0,backgroundColor:'#f00'}}/>
                <View style={{height:getSize(40),position:"absolute",bottom:0,backgroundColor:'#0f0'}}/>
            </View>

        )
    }
}