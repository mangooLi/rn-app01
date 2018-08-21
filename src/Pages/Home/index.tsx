

import React,{Component} from 'react';
import {View,TouchableWithoutFeedback, ScrollView,NativeSyntheticEvent,NativeScrollEvent,Animated} from'react-native';
import {observer} from 'mobx-react';
import {WindowWidth,} from '../../utils';

import HomeBar from '../HomeBar';
import AllPage from '../All';
import DataDiscover from '../DataDiscover';
import DataReport from '../ReportProducts';
import {pageStyle,animateStyle} from './style';
import PersonCenter from './PersonalCenter';
import homeModel from './model';

import BottomBar from '../../Common/Bottombar';

@observer
export default class Home extends Component {

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

    store = homeModel;

    state={
        x:new Animated.Value(0),
        y:new Animated.Value(0),
        scaleY:new Animated.Value(1),
        scaleX:new Animated.Value(1),
    }

    sc:any;
    folded:boolean = false

    endDrag(e:NativeSyntheticEvent<NativeScrollEvent> | undefined){
        //;
        //;
        //;
        //;
        if(!e)return;
        const x = e.nativeEvent.contentOffset.x;
        let position_x = this.getRoundx(x);
        this.sc.scrollTo({x:position_x,y:0,animated:true})
    }


    getRoundx(x:number){
        let result = 0;
        if(x<WindowWidth/2){
            result =0;
        }else if(x < WindowWidth * 1.5){
            result = WindowWidth;
        }else if(x<WindowWidth * 2.5){
            result = 2*WindowWidth;
        }else {
            result = 3 * WindowWidth
        }

        return result;
    }

    toPage(page:number){
        const position_x = (page-1)*WindowWidth;
        this.sc.scrollTo({x:position_x,y:0,animated:true})
    }

    toggle(){
        //
        if(this.folded){
            this.expand();
        }else{
            this.fold()
        }
    }

    expand(){
        this.folded = false;
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
        const {outScroll} = this.store;
        return (

            <View  >
                <TouchableWithoutFeedback onPress={()=>this.handleTouch()} >
                <Animated.View 
                    
                    onStartShouldSetResponderCapture={() =>this.shouldCapture()} // 折叠状态下，不往下面传递事件，阻止子组件捕获事件
                    // style={{...animateStyle.one,left:x,top:y,scaleY,scaleX}} >
                    style={[animateStyle.one,{left:x,transform:[{scaleX},{scaleY}]}]} >
                    
                    
                    <HomeBar toPage={(page)=>this.toPage(page)} toggle={()=>this.toggle()}/>

                    <ScrollView 
                        // locked
                        scrollEnabled = {outScroll}
                        
                        ref = {c=>this.sc = c}
                        horizontal = {true}
                        onScrollEndDrag = {(e)=>this.endDrag(e)}
                        style={pageStyle.scroll}
                    >

                        <AllPage />
                        <DataDiscover />
                        <DataReport />
                    </ScrollView>
                    <BottomBar />
                </Animated.View>
                </TouchableWithoutFeedback>
                <View style={animateStyle.two}>
                    <PersonCenter />
                </View>
            </View>

        )
    }
}