import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from'react-native';
import {barStyle} from './Home/style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';

const searchIcon = require('../assets/img/ic_search_24px.png');
const shapeIcon = require('../assets/img/icAccountCircle24Px/icAccountCircle24Px.png');



interface Prop{
    toPage:(page:number)=>void;
    toggle:()=>void;
}
class HomeBar extends Component<Prop & NavigationInjectedProps> {

    routes=[
        'Home','DataDiscover','ReportProducts'
    ]

    toPage(page:number){
        // this.props.toPage(page)
        this.props.navigation.navigate(this.routes[page-1])
    }
    toggle(){
        if(this.props.toggle){
            this.props.toggle()
        }else{
            this.props.navigation.navigate('HomePage')
        }

        
    }
    render(){

        return (
            <View style={barStyle.bar}>
                <Text onPress={()=>this.toPage(1)} style={barStyle.text}>全部</Text>
                <Text onPress={()=>this.toPage(2)} style={barStyle.text}>数据洞察</Text>
                <Text onPress={()=>this.toPage(3)} style={barStyle.report}>数据报告</Text>
                <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('SearchPage')}>
                    <Image source={searchIcon}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=>this.toggle()}>
                    <Image  style={barStyle.img_account} source={shapeIcon}/>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

export default withNavigation<Prop>(HomeBar)