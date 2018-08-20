

import React,{Component} from 'react';
import {View,Text,ScrollView ,StyleSheet,PanResponder,Button,TouchableWithoutFeedback} from 'react-native';
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

export  class MyScroll extends Component<any>{

    state={
        enable:true
    }

    callback(enable:boolean){
       
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
    <View  style={pressStyle.one}  onResponderStart={e=>console.log('view 0')} >

        <View style={pressStyle.two} onStartShouldSetResponder={e=>true}   onResponderStart={e=>console.log('view 1')} >
            <View style={pressStyle.three}  onStartShouldSetResponder={e=>false}  onResponderStart={e=>console.log('view 2')} >
                <Button title={'btn'}  onPress={()=>console.log('btn')}>hehe</Button>
            </View>

        </View>

    </View>
)



const style2=StyleSheet.create({
    page:{
        width:WindowWidth,
        height:WindowHeight/2,
        backgroundColor:'#f0f9c8'
    }
})
const NativePress = ()=>{

    return (
        <TouchableWithoutFeedback 
            onPressIn={e=>console.log('press in')}
            onPressOut={e=>console.log('press out')}
            onLongPress={e=>console.log('long press')}
        >
        <View style={style2.page}>

        </View>
        </TouchableWithoutFeedback>
    )
}


export default class Scroll extends Component {

    render() {
        return (
            <View >
                {/* <MyScroll/> */}
                {/* <MyPress/> */}
                <NativePress />
            </View>
        );
    }
}
