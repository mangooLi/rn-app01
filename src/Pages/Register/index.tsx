



import React,{Component} from 'react';
import {View,Text,TextInput,Image,TouchableWithoutFeedback} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import {observer} from 'mobx-react';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';


import {getSms,register,resetPassword} from '../../api';



import {pageStyle} from './style';
import { noop } from '../../utils';

const arrowRight = require('../../assets/img/arrow_right.png');
const check = require('../../assets/img/check.png');


interface Stete  {
    phone:string;
    code:string,
    password:string,
    checked:boolean,
    sended:boolean,
    counting:boolean,
    count:number,
    pahoneMatch:boolean
}

@observer
class RegisterPage extends Component<NavigationInjectedProps> {


    state:Stete={
        phone: '',
        code:'',
        password:'',
        pahoneMatch:false,
        checked:false,
        sended:false,
        counting:false,
        count :60
    }
    type :string = 'register'

    fetching:boolean = false;

    componentWillMount(){
        const type = this.props.navigation.getParam('type');

        this.type = type || this.type;
    }

    handleRegister(){

        const {phone,code,password,checked}=this.state;

        if(this.type === 'register' && !check){
            alert('请勾选用户协议');
            return;
        }
        (this.type === 'register'?register:resetPassword)(phone,code,password).then(res=>{
            if(res.data){
                storage.save({key:'user',data:res.data.data,expires:null});
                this.props.navigation.navigate('BottomRoute')
            }
        }).catch(noop)

    }
    toggleCheck(){
        this.setState({checked:!this.state.checked})
    }
    
    getCode(){

        const {phone,counting}=this.state;
        if(!phone || counting)return;
        getSms(phone);
        this.setState({sended:true})
        this.startCount()
    }

    startCount(){

        this.setState({counting:true,count:60});
        let interval =  setInterval(()=>{
           
            this.setState({count:this.state.count -1});
            if(this.state.count ===0){
                clearInterval(interval);
                this.setState({counting:false})
            }
        },1000)
    }

    

    

    render(){
        const {phone,code,password,checked,sended,counting,count,pahoneMatch} = this.state;
        return (
            <LinearGradient colors={['#F09819','#FF5858']} style={pageStyle.container}>

                {this.type === 'register'?<View>
                    <Text style={pageStyle.text_login} >注册</Text>
                    <Text style={pageStyle.text_welcome}>欢迎回到DT财经：）</Text>
                </View>:<Text style={pageStyle.text_login} >重置密码</Text>} 
               

                <View style={pageStyle.ipt_container}>
                    <TextInput 
                        style={[pageStyle.ipt,pageStyle.ipt_accout]} 
                        placeholder={this.type === 'reset'?'注册手机号':''}
                        value={phone}
                        onChangeText={value=>this.setState({phone:value,pahoneMatch:value.match(/^\d{11}$/)})}
                        underlineColorAndroid="transparent"/>
                        {this.type === 'register' && <Text style={pageStyle.text_pre_left}>+86</Text>} 
                        <Text onPress={()=>this.getCode()} style={[pageStyle.text_pre_right,pahoneMatch && !counting ? {color:'#000'}:null]}>
                            {!sended?'获取验证码':`重发${counting?'('+ count+')':''}`}
                        </Text>

                </View>
                
                <View style={pageStyle.ipt_container}>
                    <TextInput 
                        style={pageStyle.ipt} 
                        placeholder="验证码"
                        value={code}
                        onChangeText={value=>this.setState({code:value})}
                        underlineColorAndroid="transparent"/>
                </View>

                <View style={pageStyle.ipt_container}>
                    <TextInput 
                        style={pageStyle.ipt} 
                        placeholder="密码"
                        secureTextEntry
                        value={password}
                        onChangeText={value=>this.setState({password:value})}
                        underlineColorAndroid="transparent"/>
                </View>
                

                 {this.type ==='register' && <View style={pageStyle.notice_container}>
                    <TouchableWithoutFeedback onPress={()=>this.toggleCheck()}>
                        <View style={pageStyle.check_container}>
                            { checked && <Image style={pageStyle.check_img} source={check}/>}
                        </View>
                    </TouchableWithoutFeedback>
                    <Text style={pageStyle.notice_text}>我已阅读并同意用户协议与免责声明</Text>
                </View>}
                <TouchableWithoutFeedback onPress={()=>this.handleRegister()}>
                    <View style={pageStyle.img_container}>
                        <Image style={pageStyle.img} source={arrowRight}/>
                    </View>
                </TouchableWithoutFeedback>
            </LinearGradient>
        )
    }
}

export default withNavigation<{}>(RegisterPage)