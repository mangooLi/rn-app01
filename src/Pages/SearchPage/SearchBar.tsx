

import React,{Component} from 'react';
import {View,Text,Image,TouchableOpacity,TextInput,TouchableWithoutFeedback} from 'react-native';
import {tabBarStyle,inputBarStyle} from './style';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';
import SearchModel from './model';
import {observer} from 'mobx-react';

const leftIcon = require('../../assets/img/left.png');
const searchIcon = require('../../assets/img/search.png');


@observer
class SearchBar extends Component<NavigationInjectedProps & {store:SearchModel}>{

    back(){
        this.props.navigation.goBack()
    }
    cancel(){
        this.props.store.search = '';
        this.back();
    }
    handleChangetext(text:string){

        this.props.store.changeSearch(text)
    }
    endInput(){
        // alert(this.props.store.search);
        this.props.store.reset();
        this.props.store.loadData();
    }
    render(){
        const {search}=this.props.store;
        return (
            <View style={tabBarStyle.tabBar}>
                <TouchableOpacity style={tabBarStyle.imgContainer} onPress={()=>this.back()} activeOpacity={1}>
                    <Image style={tabBarStyle.img} source={leftIcon}/>
                </TouchableOpacity>
                <Image style={tabBarStyle.search} source={searchIcon}/>
                
                <TextInput 
                    style={inputBarStyle.input}
                    underlineColorAndroid="transparent"
                    placeholder="搜索DT・一财"
                    value={search}
                    onChangeText={value=>this.handleChangetext(value)}
                    onEndEditing={()=>this.endInput()}
                />
                <TouchableWithoutFeedback style={inputBarStyle.text_container} onPress={()=>this.cancel()}>
                    <View><Text style={inputBarStyle.text}>取消</Text></View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}



export default withNavigation<{store:SearchModel}>(SearchBar)