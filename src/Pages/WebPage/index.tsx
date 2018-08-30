



import React,{Component} from 'react';

import {View,Text,WebView} from 'react-native';
import TabBar from '../../Common/TabBar';
import {NavigationInjectedProps} from 'react-navigation';
import { MyStyleSheetCreate, WindowWidth, WindowHeight } from '../../utils';
 

interface Prop{
    uri:string
}

//http://www.dtcj.com/about


export default class WebPage extends Component<NavigationInjectedProps & Prop> {

    state ={
        uri:''
    }

    componentWillMount(){
        const uri =  this.props.navigation.getParam('uri') || 'http://www.dtcj.com/about';

        this.setState({uri})
    }

    render (){
        console.log(this.state.uri)
        return (<View style={style.conainer}>
            <TabBar leftIcon={<Text onPress={()=>this.props.navigation.goBack()}>返回</Text>}/>
            <WebView  source={{uri:this.state.uri }}/>
        </View>)
    }
}

const style=MyStyleSheetCreate({
    conainer:{
        flex:1,
        width:WindowWidth,
    }
})
