

import React,{Component} from 'react';
import {View,Text,ScrollView ,StyleSheet,PanResponder} from 'react-native';
import {WindowHeight,WindowWidth} from '../utils';
// import NestedScrollView from 'react-native-nested-scroll-view';

const style=StyleSheet.create({
    item1:{
        width:WindowWidth,
        height:WindowHeight/4,
        backgroundColor:'#ffcc89'
    },
    item2:{
        width:WindowWidth,
        height:WindowHeight/4,
        backgroundColor:'#09cdd1'
    },
    item3:{
        width:WindowWidth,
        height:WindowHeight/4,
        backgroundColor:'#0dff19'
    },
    split:{
        width:WindowWidth,
        height:WindowHeight/8,
        backgroundColor:'#000'
    }
})

class MyScroll extends Component<any>{

    state={
        enable:true
    }

    callback(enable:boolean){
        console.log('heihie')
        this.setState({enable})
    }


    render (){
        
        return (<ScrollView  scrollEnabled={this.state.enable}>


            <ScrollView 
                onTouchStart={()=>this.callback(false)}
                // onScrollBeginDrag={()=>this.callback(false)}
                onScrollEndDrag={()=>this.callback(true)}
                
                style={{height:WindowHeight/2}} >
    
                <View style={style.item1} />  
                <View style={style.item2}/>
                <View style={style.item3}/>
            </ScrollView>
    
            <View style={style.split}/>
            <ScrollView style={{height:WindowHeight/2}}>
                <View style={style.item1}></View>
                <View style={style.item2}></View>
                <View style={style.item3}></View>
            </ScrollView>
    
        </ScrollView>)
    }

}





const pressStyle = StyleSheet.create({
    one:{
        backgroundColor:'#df9823',
        justifyContent:'center',
        height:WindowHeight,
        width:WindowWidth
    },
    two:{
        height:WindowHeight/2,
        width:WindowWidth,
        backgroundColor:'#13cf97',
        justifyContent:'center'

    },
    three:{
        height:WindowHeight/4,
        width:WindowWidth,
        backgroundColor:'#87fc31'

    }
})
const MyPress = ()=>(
    <View 
        style={pressStyle.one} 
        onResponderStart={e=>{console.log('one')}}
        onStartShouldSetResponder={e=>true} 
        onStartShouldSetResponderCapture={()=>false}>

        <View 
            style={pressStyle.two}
            onResponderStart={e=>{console.log('two')}}
        onStartShouldSetResponder={e=>true} 
        onStartShouldSetResponderCapture={()=>true}>

            <View style={pressStyle.three}
                onResponderStart={e=>{console.log('three')}}
                onStartShouldSetResponder={e=>true} 
                onStartShouldSetResponderCapture={()=>false}
            ></View>
        </View>
    </View>
)

export default class Scroll extends Component {

    render() {
        return (
            <View >
                <MyScroll/>
                {/* <MyPress/> */}
            </View>
        );
    }
}
