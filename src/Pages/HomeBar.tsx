import React,{Component} from 'react';
import {Text,Image,TouchableWithoutFeedback,View,Animated,DeviceEventEmitter} from'react-native';
import {WindowWidth,WindowHeight,getSize,MyStyleSheetCreate} from '../utils'
// import {barStyle} from './Home/style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';

import listStore from './GlobalModel';
import { autorun } from 'mobx';
const searchIcon = require('../assets/img/ic_search_24px/ic_search_24px.png');
const shapeIcon = require('../assets/img/icAccountCircle24Px/icAccountCircle24Px.png');





interface Prop{
    toPage?:(page:number)=>void;
    toggle?:()=>void;
    noHide?:boolean;  // 
}
interface State{
    boxX:Animated.Value
    display:'flex'|'none',
    visible:true
}
class HomeBar extends Component<Prop & NavigationInjectedProps> {


    activePage:number = 0;
    fold:boolean = false;
    routes=[
        'Home','DataDiscover','ReportProducts'
    ]
    state:State={

        boxX:new Animated.Value(getSize(30)),
        display:'flex',
        visible:true
    }

    constructor(props:any){
        super(props)
    }



    componentWillMount(){
        const {noHide}=this.props;
        if(noHide){
            this.hide(true)
        }

        DeviceEventEmitter.addListener('ListRouteSwipeTo',({page})=>{
            if(page!==this.activePage){
                this.moveBox(page)
            }
        })
        DeviceEventEmitter.addListener('PageExpand',()=>{
        // 页面展开后，导航显示，tab消失
            if(noHide){
                this.hide()
            }else{
                this.hide(false)
            }

        })
        DeviceEventEmitter.addListener('HidePage',()=>{
            console.log('receive HidePage')
            if(noHide){
                this.hide(false)
            }
        })
    }

    hide(hide:boolean=true){
        this.setState({display:hide?'none':'flex'})
        this.setState({visible:!hide})
    }
    

    hidePage(){
        // this.fold = !this.fold;

        DeviceEventEmitter.emit('HidePage');

        console.log('toggle',this.fold);


        if(this.props.noHide){  // 只有自定义导航栏会隐藏
            this.hide(false)
        }else{
            this.hide()
        }
    }

    toPage(page:number){

        this.props.navigation.navigate(this.routes[page])

    }
    moveBox(index:number){
        const values = [30,102,190];
        Animated.timing(this.state.boxX,{toValue:getSize(values[index]) }).start();
        this.activePage = index;
    }
    
    
    
    render(){
        const {boxX,visible,display}=this.state
        return (

            <View style={[barStyle.bar,{display}]}>
                <Text onPress={()=>this.toPage(0)} style={barStyle.text}>全部</Text>

                <Text onPress={()=>this.toPage(1)} style={barStyle.text}>数据洞察</Text>
                <Text onPress={()=>this.toPage(2)} style={barStyle.report}>数据报告</Text>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('SearchPage')}>
                    <Image source={searchIcon} style={barStyle.img_search}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.hidePage()}>
                    <Image  style={barStyle.img_account} source={shapeIcon}/>
                </TouchableWithoutFeedback>

                <Animated.View  style={[barStyle.box,{left:boxX}]}/>
            </View>


        )
    }
}

export default withNavigation<Prop>(HomeBar)


export const barStyle=MyStyleSheetCreate({
    bar:{

        height:40,
        flexDirection:'row',
        paddingTop:31-24,
        backgroundColor:'#fff',
        borderBottomWidth:1/3.5,
        borderBottomColor:'#999',
        // position:'absolute',
        width:WindowWidth,
        zIndex:9,
        
    },
    empty:{
        height:40,
        flexDirection:'row',
        // paddingTop:31-24,
        backgroundColor:'transparent',
        width:WindowWidth,
        zIndex:9,
        
    },
    text:{
        fontSize:16,
        height:22,
        lineHeight:22,
        marginLeft:20,
        marginRight:4
    },
    all:{
        
    },
    report:{
        fontSize:16,
        height:22,
        lineHeight:22,
        marginLeft:20,
        flex:1
    },
    img_search:{
        width:24,
        height:24
    },
    img_account:{
        marginLeft:16,
        marginRight:12
    },
    box:{
        width:12,
        height:4,
        position:'absolute',
        top:36,
        // left:0,
        backgroundColor:'#ff5b31',
        zIndex:2000
    }
})