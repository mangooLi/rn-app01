





import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView} from 'react-native';

import TabBar from '../../Common/TabBar';
import {pageStyle}  from './style';
import IptCrd from './IptCard';
import { getSize } from '../../utils';
import {updatePassword} from '../../api';

export default class UpdatePassword extends Component {


    ipt1:any;
    ipt2:any;
    ipt3:any;

    state = {
        prePswd:'',
        newPswd:'',
        reNewPswd:''
    }

    valid(newPswd:string,reNewPswd:string){
        // const {newPswd,reNewPswd}=this.state;

        return newPswd === reNewPswd && newPswd.length >=6;
    }

    updatePswd(){
        const {prePswd,newPswd,reNewPswd}=this.state
        if(this.valid(newPswd,reNewPswd)){
            updatePassword(prePswd,newPswd).then(res=>{
                if(res.data){
                    global.token =res.data.data.token;
                    global.user = res.data.data;
                    this.setState({
                        prePswd:'',
                        newPswd:'',
                        reNewPswd:''
                    });
                    this.ipt1.clear();
                    this.ipt2.clear();
                    this.ipt3.clear()
                }
            })
        }
        
    }

    render (){
        const {newPswd,reNewPswd}=this.state;
        return (<View>
            <TabBar title="修改密码" rightIcon={
                <Text 
                    style={[pageStyle.rightIcon,this.valid(newPswd,reNewPswd)?{color:'#000'}:null ]} 
                    onPress={()=>this.updatePswd()}
                    >完成</Text>
            }/>

            <IptCrd 
                ref={c=>this.ipt1=c}
                style={{marginTop:getSize(16)}}
                label="为了保障你的账户安全，修改密码前请填写原密码"
                placeholder="请输入原密码"
                password
                onTextChange={text=>this.setState({prePswd:text})}
            />
            <IptCrd 
                ref={c=>this.ipt2=c}
                style={{marginTop:getSize(32)}}
                label="新密码为不少于6位的数字或字母"
                placeholder="请输入新密码"
                password
                onTextChange={text=>this.setState({newPswd:text})}
            />
            <IptCrd 
                ref={c=>this.ipt3=c}
                placeholder="请确认新密码"
                password
                onTextChange={text=>this.setState({reNewPswd:text})}
            />
        </View>)
    }
}