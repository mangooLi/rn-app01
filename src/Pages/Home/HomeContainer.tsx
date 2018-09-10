

import React,{Component} from 'react';
import {View,TouchableWithoutFeedback,Animated,DeviceEventEmitter} from'react-native';
import {observer} from 'mobx-react';
import {WindowWidth, WindowHeight, getSize,MyStyleSheetCreate} from '../../utils';

import {NavigationInjectedProps,withNavigation} from 'react-navigation';
import Orientation from 'react-native-orientation';

import {animateStyle,homeContainerStyle} from './style';
import PersonCenter from './PersonalCenter';

import HomeBar from '../HomeBar';


import Bottombar from '../../Common/BottomBar';


@observer
class HomeContainer extends Component<NavigationInjectedProps> {

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

    constructor(props:any){
        super(props)
    }




    state={
        x:new Animated.Value(0),
        scaleY:new Animated.Value(1),
        scaleX:new Animated.Value(1),
    }
    sc:any;
    folded:boolean = false;

    componentWillMount(){
        Orientation.lockToPortrait();

        DeviceEventEmitter.addListener('HidePage',()=>{
            this.fold()
        })
        DeviceEventEmitter.addListener('PageExpand',()=>{
            this.expand()
        })
    }


    componentWillUnmount(){
        console.log('home contaner unmount')
        this.expand();

       
    }

    

    expand(){
        if(!this.folded){
            return;  //展开状态下不做处理
        }
        this.folded = false;
        // listStore.expandPage()
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:0,duration:500}),
            // Animated.timing(this.state.y,{toValue:0,duration:500}),
            Animated.timing(this.state.scaleY,{toValue:1,duration:500}),
            Animated.timing(this.state.scaleX,{toValue:1,duration:500})
        ]).start(()=>{

            DeviceEventEmitter.emit('PageExpand')
        })

    }
    fold(){
        this.folded = true;
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:-WindowWidth/2,duration:500}),
            // Animated.timing(this.state.y,{toValue:WindowHeight*0.1,duration:500}),
            Animated.timing(this.state.scaleY,{toValue:0.8,duration:500}),
            Animated.timing(this.state.scaleX,{toValue:0.8,duration:500}),
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

            <View  style={homeContainerStyle.container}>
                <TouchableWithoutFeedback onPress={()=>this.handleTouch()} >
                <Animated.View 
                    
                    onStartShouldSetResponderCapture={() =>this.shouldCapture()} // 折叠状态下，不往下面传递事件，阻止子组件捕获事件

                    style={[animateStyle.one,{left:x,transform:[{scaleX},{scaleY}]}]} >

                    <View style={{flex:1}}>
                        <HomeBar noHide/>
                        <View style={{flex:1}}>
                            {this.props.children}
                        </View>
                        <Bottombar noHide/>
                    </View>
                </Animated.View>
                </TouchableWithoutFeedback>

                <View style={animateStyle.two}>
                    <PersonCenter onleave={()=>this.expand()}/>
                </View>
            </View>

        )
    }
}

export default withNavigation<{}>(HomeContainer) 