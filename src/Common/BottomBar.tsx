

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback,DeviceEventEmitter,Animated, ViewStyle} from 'react-native';
import {getSize,WindowHeight,WindowWidth,MyStyleSheetCreate} from '../utils';
import listStore from '../Pages/GlobalModel';
import Icon from 'react-native-vector-icons/FontAwesome';


// import {cmpStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';
import { autorun } from 'mobx';

const homeIcon = require('../assets/img/ic_home_24px/ic_home_24px.png')
const heroIcon = require('../assets/img/ic_home_24px/ic_home_24px.png');

interface Prop{
    noHide?:boolean
}

interface State{
    homeColor:string,
    dataColor:string,
    display:'flex'|'none',
    visible:boolean
}

class BottomBar extends Component<NavigationInjectedProps & Prop> {

    state:State={
       
        homeColor:'#f00',
        dataColor:'#333',
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
                dataColor:'#333'
            })
        }else{
            this.setState({
                homeColor:'#333',
                dataColor:'#f00'
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
            dataColor:'#333'
        })
    }
    navData=()=>{
        this.props.navigation.navigate('DataPlan');
        this.setState({
            homeColor:'#333',
            dataColor:'#f00'
        })
    }

    render() {
        const {homeColor,dataColor,display,visible}=this.state;
        console.log('render ',display)
        return (
            <View>
            {visible? (<View style={[cmpStyle.container,{display}]}>
               
                    <TouchableWithoutFeedback onPress={this.navHome}>
                        <View style={cmpStyle.part}>

                            <View style={cmpStyle.icon}>
                                <Icon name="home" size={24} color={homeColor}/>    
                            </View> 
                            <Text style={cmpStyle.text}>首页</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.navData}>
                        <View style={cmpStyle.part}>
                            {/* <Image style={cmpStyle.icon} source={heroIcon}/> */}
                            <View style={cmpStyle.icon}>
                                <Icon name="database" size={24} color={dataColor}/>
                            </View>
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