import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback,StyleSheet,Animated,} from'react-native';
import {WindowWidth,WindowHeight,getSize} from '../utils'
// import {barStyle} from './Home/style';
import {NavigationInjectedProps,withNavigation,NavigationScreenProp} from 'react-navigation';

import listStore from './ListModel';
import { autorun } from 'mobx';
const searchIcon = require('../assets/img/ic_search_24px.png');
const shapeIcon = require('../assets/img/icAccountCircle24Px/icAccountCircle24Px.png');




export const barStyle=StyleSheet.create({
    bar:{
        height:getSize(40),
        flexDirection:'row',
        paddingTop:getSize(31-24),
        backgroundColor:'#fff',
        borderBottomWidth:getSize(1/3.5),
        borderBottomColor:'#999',
        position:'absolute',
        width:WindowWidth,
        zIndex:9
    },
    text:{
        fontSize:getSize(16),
        height:getSize(22),
        lineHeight:getSize(22),
        marginLeft:getSize(20),
        marginRight:getSize(4)
    },
    all:{
        
    },
    report:{
        fontSize:getSize(16),
        height:getSize(22),
        lineHeight:getSize(22),
        marginLeft:getSize(20),
        flex:1
    },
    img_account:{
        marginLeft:getSize(16),
        marginRight:getSize(12)
    }
})
interface Prop{
    toPage:(page:number)=>void;
    toggle:()=>void;
}
class HomeBar extends Component<Prop & NavigationInjectedProps> {



    state={
        x:new Animated.Value(0),
        scaleY:new Animated.Value(1),
        scaleX:new Animated.Value(1),
        y:new Animated.Value(0)
    }

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

    routes=[
        'Home','DataDiscover','ReportProducts'
    ]

    toPage(page:number){
        // this.props.toPage(page)
        this.props.navigation.navigate(this.routes[page-1])
    }
    expand(){

        Animated.parallel([
            Animated.timing(this.state.x,{toValue:0,duration:1000}),
            Animated.timing(this.state.y,{toValue:0,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:1,duration:1000}),
            Animated.timing(this.state.scaleX,{toValue:1,duration:1000})
        ]).start()
    }
    fold(){

        Animated.parallel([
            Animated.timing(this.state.x,{toValue:-WindowWidth/2,duration:1000}),
            Animated.timing(this.state.y,{toValue:WindowHeight*0.1,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:0.8,duration:1000}),
            Animated.timing(this.state.scaleX,{toValue:0.8,duration:1000}),
        ]).start()
    }
    toggle(){
        
        if(listStore.fold){
            listStore.expandPage()
            this.expand()
        }else{
            listStore.foldPage()
            this.fold()
        }

        
    }
    render(){
        const {x,y,scaleX,scaleY}=this.state
        return (
            <Animated.View style={[barStyle.bar,{left:x,top:y,transform:[{scaleX},{scaleY}]}]}>
                <Text onPress={()=>this.toPage(1)} style={barStyle.text}>全部</Text>
                <Text onPress={()=>this.toPage(2)} style={barStyle.text}>数据洞察</Text>
                <Text onPress={()=>this.toPage(3)} style={barStyle.report}>数据报告</Text>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('SearchPage')}>
                    <Image source={searchIcon}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.toggle()}>
                    <Image  style={barStyle.img_account} source={shapeIcon}/>
                </TouchableWithoutFeedback>
            </Animated.View>
        )
    }
}

export default withNavigation<Prop>(HomeBar)