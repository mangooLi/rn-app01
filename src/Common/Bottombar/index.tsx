

import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback,StyleSheet,Animated} from 'react-native';
import {getSize,WindowHeight,WindowWidth} from '../../utils';
import listStore from '../../Pages/ListModel';

// import {cmpStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';
import { autorun } from 'mobx';

const homeIcon = require('../../assets/img/ic_home_24px/ic_home_24px.png')
const heroIcon = require('../../assets/img/ic_home_24px/ic_home_24px.png');

class BottomBar extends Component<NavigationInjectedProps> {

    state={
        x:new Animated.Value(0),
        y:new Animated.Value(0),
        scaleY:new Animated.Value(1),
        scaleX:new Animated.Value(1),
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

    expand(){
        // this.folded = false;
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:0,duration:1000}),
            Animated.timing(this.state.y,{toValue:0,duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:1,duration:1000}),
            Animated.timing(this.state.scaleX,{toValue:1,duration:1000})
        ]).start()
    }
    fold(){
        // this.folded = true;
        Animated.parallel([
            Animated.timing(this.state.x,{toValue:-WindowWidth/2,duration:1000}),
            Animated.timing(this.state.y,{toValue:WindowHeight*0.1-getSize(4),duration:1000}),
            Animated.timing(this.state.scaleY,{toValue:0.8,duration:1000}),
            Animated.timing(this.state.scaleX,{toValue:0.8,duration:1000}),
        ]).start()
    }

    render() {
        const {x,y,scaleX,scaleY}=this.state
        return (
            <Animated.View style={[cmpStyle.container,{left:x,bottom:y,transform:[{scaleX},{scaleY}]}]}>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ListRoute')}>
                    <View style={cmpStyle.part}>
                        <Image style={cmpStyle.icon} source={homeIcon}/>
                        <Text style={cmpStyle.text}>首页</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('DataPlan')}>
                    <View style={cmpStyle.part}>
                        <Image style={cmpStyle.icon} source={heroIcon}/>
                        <Text style={cmpStyle.text}>数据侠</Text>
                    </View>
                </TouchableWithoutFeedback>
            </Animated.View>
        );
    }
}

export default withNavigation<{}>(BottomBar)







export const cmpStyle = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:getSize(49),
        borderTopWidth:getSize(0.5),
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
        width:getSize(24),
        height:getSize(24),
        marginTop:getSize(7),
    },
    text:{
        fontSize:getSize(10),
        height:getSize(14),
        lineHeight:getSize(14),
        textAlign:'center',
        marginTop:getSize(4)
    }
})