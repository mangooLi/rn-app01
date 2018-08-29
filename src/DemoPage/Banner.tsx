

import React,{Component,}from 'react';
import {View, Text,ScrollView, Dimensions, NativeScrollEvent,NativeSyntheticEvent} from 'react-native';
import {WindowWidth} from '../utils';



interface Prop{
    list?:any[],
    renderItm?:()=>Component;
    children:any[],
    duration:number
}
interface IndicatorProp{
    total:number
}

class Indicator extends Component<IndicatorProp> {

    state={
        current:1
    }
    componentWillMount(){
        this.setState({current:this.props.total})
    }
    setCurrent(cur:number){
        if(cur>this.props.total){
            cur = cur-this.props.total;
        }else if(cur<1){
            cur = cur =this.props.total;
        }
        this.setState({current:cur})
    }
    render (){
        const {total}=this.props;
        const {current}=this.state;
        return (<View >
            <Text>{current}/{total}</Text>
        </View>)
    }
}

const width = Dimensions.get('window').width;

class Banner extends Component<Prop> {

    offsetX:number = 0; // 记录当前sc最左边的偏移
    index:number = 0; // 当前显示的child的页码
    sc:ScrollView|null;
    indicator:Indicator|null;
    length:number = 0;

    interval:any;

    componentDidMount(){
        // setTimeout(()=>this._goIndex(this.index),0)   
        // this.interval = setInterval()
        this._autoRun()
    }

    _autoRun=()=>{
        const {duration}=this.props;
        
        console.log('_auto run')
        this.interval = setInterval(()=>{
            let index = this.index;
            if(index === this.length-1){
                index=1;
                this._goIndex(1,false);
                index = index +1;
            }else{
                index = index +1;
            }
            this._goIndex(index)
        },duration||1000)
    }
    
    _goIndex(index:number,animated:boolean=true){
        
        this.index = index;
        this.indicator && this.indicator.setCurrent(index)
        const offsetX = width * index;
        this.offsetX=offsetX
        console.log(index,offsetX)

        this.sc && this.sc.scrollTo({x:offsetX,y:0,animated})
    }

    _onScroll=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{
        // const offsetX = e.nativeEvent.contentOffset.x; //  滑动之后的偏移量
        // if(offsetX>this.offsetX){ //往左边滑动
        //     this.index -=1;

        // }else{
        //     this.index+=1;
        // }
        // this._goIndex(this.index);


    }

    getNearIndex(offsetX:number){

        const index = Math.round(offsetX/width) ;
        return index;

    }

    _beginDrag=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{
        if(this.interval){
            clearInterval(this.interval);
            this.interval = null;
        }
    }
    _endDrag=(e:NativeSyntheticEvent<NativeScrollEvent>)=>{
        console.log('endscroll')
        let offsetX= e.nativeEvent.contentOffset.x;
        console.log('offsetX',offsetX)
        if(offsetX>this.offsetX){ //往右边滑动
            this.index +=1;

        }else{ //往右边滑动
            this.index-=1;
        }

        this._goIndex(this.index);

    }
    _endAnimate=()=>{

        if(this.index===this.length-1){
            this._goIndex(1,false)
        }
        if(this.index === 0){
            this._goIndex(this.length-2,false)
        }
        if(!this.interval){
            this._autoRun()
        }
    }

    render (){
        const {children=[]}=this.props;
        const length = children && children.length;
        let newChild = [];

        if(length){
            newChild.push(children[length-1],...children,children[0])
        }
        this.length = newChild.length;
        console.log(newChild)
        return (<View>
            <ScrollView
                ref={c=>this.sc=c}
                horizontal={true}
                onScrollBeginDrag={this._beginDrag}
                onScrollEndDrag={this._endDrag}
                onMomentumScrollEnd={this._endAnimate}
            >
                {/* {children} */}
                {newChild}
            </ScrollView>
                <Indicator ref={c=>this.indicator=c} total={length}/>
        </View>)
    }
}



export default class BannerPage extends Component {

    render (){
        return (
            <Banner duration={3000}>
                <View style={{width:WindowWidth,height:200,backgroundColor:'#f00'}}/>
                <View style={{width:WindowWidth,height:200,backgroundColor:'#0f0'}}/>
                <View style={{width:WindowWidth,height:200,backgroundColor:'#00f'}}/>
            </Banner>
        )
    }
}