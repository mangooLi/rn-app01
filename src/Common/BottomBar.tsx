

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback,StyleSheet,Animated} from 'react-native';
import {getSize,WindowHeight,WindowWidth,MyStyleSheetCreate} from '../utils';
import listStore from '../Pages/GlobalModel';
import Icon from 'react-native-vector-icons/FontAwesome';


// import {cmpStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';
import { autorun } from 'mobx';

const homeIcon = require('../assets/img/ic_home_24px/ic_home_24px.png')
const heroIcon = require('../assets/img/ic_home_24px/ic_home_24px.png');

class BottomBar extends Component<NavigationInjectedProps> {

    state={
        x:new Animated.Value(0),
        y:new Animated.Value(0),
        scaleY:new Animated.Value(1),
        scaleX:new Animated.Value(1),
        homeColor:'#f00',
        dataColor:'#333'
    }



    constructor(props:any){
        super(props);

        autorun(()=>{
            if(listStore.fold){
                this.fold()
            }else{
                this.expand()
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

    

    expand(){
        // this.folded = false;
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:0,duration:500}),
            Animated.timing(this.state.y,{toValue:0,duration:500}),
            Animated.timing(this.state.scaleY,{toValue:1,duration:500}),
            Animated.timing(this.state.scaleX,{toValue:1,duration:500})
        ]).start()
    }
    fold(){
        // this.folded = true;
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:-WindowWidth/2,duration:500}),
            Animated.timing(this.state.y,{toValue:WindowHeight*0.1-4,duration:500}),
            Animated.timing(this.state.scaleY,{toValue:0.8,duration:500}),
            Animated.timing(this.state.scaleX,{toValue:0.8,duration:500}),
        ]).start()
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
        const {x,y,scaleX,scaleY,homeColor,dataColor}=this.state
        return (
            <Animated.View style={[cmpStyle.container,{left:x,bottom:y,transform:[{scaleX},{scaleY}]}]}>
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
            </Animated.View>
        );
    }
}

export default withNavigation<{}>(BottomBar)




export const cmpStyle = MyStyleSheetCreate({
    container:{
        flexDirection:'row',
        height:49,
        borderTopWidth:0.5,
        borderTopColor:'#f8f8f8',
        backgroundColor:'#f8f8f8',
        position:'absolute',
        width:WindowWidth
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