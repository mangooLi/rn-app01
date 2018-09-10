

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback,DeviceEventEmitter,Animated, ViewStyle} from 'react-native';
import {getSize,WindowHeight,WindowWidth,MyStyleSheetCreate} from '../utils';




// import {cmpStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';
// import { autorun } from 'mobx';

const _homeIcon = require('../assets/img/ic_home/ic_home_black.png');
const _homeActive = require('../assets/img/ic_home_active/ic_home_24px.png');

const _HeroIcon = require('../assets/img/ic_school/ic_school_24px.png');
const _HeroActive = require('../assets/img/ic_school_active/ic_school_orange.png');

interface Prop{
    noHide?:boolean
}

interface State{
    homeColor:string,
    dataColor:string,
    display:'flex'|'none',
    visible:boolean,
    homeIcon:any,
    dataIcon:any
}

class BottomBar extends Component<NavigationInjectedProps & Prop> {

    state:State={
       
        homeColor:'#f00',
        dataColor:'#333',
        homeIcon:_homeActive,
        dataIcon:_HeroIcon,
        display:'flex',
        visible:true
    }



    constructor(props:any){
        super(props);
    }


    componentWillMount(){
        const {noHide}=this.props;
        if(noHide){
            this.hide()
        }
        DeviceEventEmitter.addListener('PageExpand',()=>{
            this.hide(noHide?true:false)
        })
        DeviceEventEmitter.addListener('HidePage',()=>{
            console.log('receive hide page bottmbar')
            if(noHide){
                this.hide(false)
            }else{
                this.hide()
            }

        })
        
    }
   

    componentWillReceiveProps(nextProps:NavigationInjectedProps){
        // console.log('nextProps.navigation', nextProps.navigation)
        const {state} = nextProps.navigation;
        if(state.index === 0){
            this.setState({
                homeColor:'#f00',
                dataColor:'#333',
                homeIcon:_homeActive,
                dataIcon:_HeroIcon
            })
        }else{
            this.setState({
                homeColor:'#333',
                dataColor:'#f00',
                homeIcon:_homeIcon,
                dataIcon:_HeroActive
            })
        }
        // return true
    }
    hide(hide:boolean=true){
        this.setState({display:hide?'none':'flex'});
        this.setState({visible:!hide})
        this.forceUpdate()
    }
    

   

    navHome=()=>{

        this.props.navigation.navigate('ListRoute');
        this.setState({
            homeColor:'#f00',
            dataColor:'#333',
            homeIcon:_homeActive,
            dataIcon:_HeroIcon
        })
    }
    navData=()=>{
        this.props.navigation.navigate('DataPlan');
        this.setState({
            homeColor:'#333',
            dataColor:'#f00',
            homeIcon:_homeIcon,
            dataIcon:_HeroActive
        })
    }

    render() {
        const {homeColor,dataColor,display,visible,homeIcon,dataIcon}=this.state;
        // console.log('render ',display)
        return (
            <View>
            {visible? (<View style={[cmpStyle.container,{display}]}>
               
                    <TouchableWithoutFeedback onPress={this.navHome}>
                        <View style={cmpStyle.part}>
                            <Image style={cmpStyle.icon} source={homeIcon}/>
                            
                            <Text style={cmpStyle.text}>首页</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.navData}>
                        <View style={cmpStyle.part}>
                            <Image style={cmpStyle.icon} source={dataIcon}/>
                          
                            <Text style={cmpStyle.text}>数据侠</Text>
                        </View>
                    </TouchableWithoutFeedback>

            </View>):<View style={[cmpStyle.empty,{display}]}/>}</View>
        );
    }
}

export default withNavigation<Prop>(BottomBar)




export const cmpStyle = MyStyleSheetCreate({

    container:{
        flexDirection:'row',
        height:49,
        borderTopWidth:0.5,
        borderTopColor:'#f8f8f8',
        backgroundColor:'#f8f8f8',
        position:'absolute',
        width:WindowWidth,
        bottom:0
    },
    empty:{
        flexDirection:'row',
        height:49,
        backgroundColor:'transparent',
        position:'absolute',
        width:WindowWidth,
        bottom:0
    },
    
    part:{
        flex:1,
        alignItems:'center'
    },
    icon:{
        width:24,
        height:24,
        marginTop:7,
    },
    text:{
        fontSize:10,
        height:14,
        lineHeight:14,
        textAlign:'center',
        marginTop:4
    }
})


