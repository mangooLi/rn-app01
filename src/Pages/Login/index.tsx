

import React,{Component} from 'react';
import {View,Text,TextInput,Image,TouchableWithoutFeedback} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {observer} from 'mobx-react';
import globalStore from '../GlobalModel';
import {login} from '../../api'
import {NavigationInjectedProps,withNavigation} from 'react-navigation';
import TabBar from '../../Common/TabBar';

import {pageStyle} from './style';

const arrowRight = require('../../assets/img/arrow_right.png');
import LoginModel from './model';

@observer
class LoginPage extends Component<NavigationInjectedProps> {

    store :LoginModel = new LoginModel();

    fetching:boolean = false;

    handleLogin(){
        if(this.fetching)return;
        this.fetching = true;
        const {account,password} = this.store;
        

        login(account,password).then(res=>{
            this.fetching = false;
            if(res.data){
                storage.save({key:'user',data:res.data.data,expires:null});
                global.user = res.data.data;
                global.token = res.data.data.token;
                globalStore.setUser(res.data.data)
                this.props.navigation.navigate('BottomRoute')
            }

        }).catch(()=>this.fetching= false)
    }

    render(){
        const {account,password}=this.store;
        return (
            <LinearGradient colors={['#F09819','#FF5858']} style={pageStyle.container}>
                <TabBar style={{borderBottomWidth:0}}/>
                <Text style={pageStyle.text_login} >登陆</Text>
                <Text style={pageStyle.text_welcome}>欢迎回到DT财经：）</Text>
                <View style={pageStyle.ipt_accout}>
                    <TextInput 
                        style={pageStyle.ipt} 
                        placeholder="账号"
                        value={account}
                        onChangeText={value=>this.store.update({account:value})}
                        underlineColorAndroid="transparent"/>
                </View>
                <View style={pageStyle.ipt_pasword}>
                    <TextInput 
                        style={pageStyle.ipt} 
                        placeholder="密码"
                        secureTextEntry
                        value={password}
                        onChangeText={value=>this.store.update({password:value})}
                        underlineColorAndroid="transparent"/>
                </View>
                <View style={pageStyle.text_notice}>
                    <Text 
                        style={pageStyle.text_forget}
                        onPress={()=>this.props.navigation.navigate('RegisterPage',{type:'reset'})}
                    >忘记密码</Text>
                    <Text 
                        style={pageStyle.text_new} 
                        onPress={()=>this.props.navigation.navigate('RegisterPage')}
                    >注册新账号</Text>
                </View>
                <TouchableWithoutFeedback onPress={()=>this.handleLogin()}>
                    <View style={pageStyle.img_container}>
                        <Image style={pageStyle.img} source={arrowRight}/>
                    </View>
                </TouchableWithoutFeedback>
            </LinearGradient>
        )
    }
}


export default withNavigation<{}>(LoginPage) 