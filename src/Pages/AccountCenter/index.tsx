import  React ,{Component}from 'react';
import  {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,Modal
} from 'react-native';
import TabBar from '../../Common/TabBar';
const right = require('../../assets/img/right0.png');
import {pageStyle,modalStyle} from './style'
import ModalContent from './ModalContent';
import {modifyUserInfo} from '../../api';
import { noop } from '../../utils';

export default class AccountCenter extends Component {


    state={
        modalVisible:false,
        type:''
    }
    changeAvatar(){
        this.setState({modalVisible:true,type:'img'})
    }
    handleRequestClose(){
        this.setState({modalVisible:false})
    }

    handleNameChange(name:string){
       
    }

    handleSelect(info:string,type:string){

        if(type==='text'){
            modifyUserInfo(info).then(res=>{
                if(res.data){
                    global.token = res.data.data.token;
                    global.user = res.data.data;
                    this.forceUpdate()
                }
            }).catch(noop)
        }
    }

    render (){
        const user:AccountInfo = global.user;
        return (<View style={pageStyle.container}>
        <TabBar title = "我" style={{backgroundColor:'#f8f8f8',borderBottomColor:'#c8c7cc',}}/>
            <View style={pageStyle.head_container}>
                <TouchableWithoutFeedback onPress={()=>this.changeAvatar()}>
                    {user &&  user.avatar_url ?<Image style={pageStyle.head_img} source={{ uri:user &&  user.avatar_url}}/> :<View style={pageStyle.head_img}/>}
                </TouchableWithoutFeedback>
                <Text style={pageStyle.head_name}>{user &&  user.nickname || 'userName'}</Text>
            </View>
            <View style={pageStyle.line}>
                <Text style={pageStyle.line_text} onPress={()=>this.setState({modalVisible:true,type:'text'})}>修改用户名</Text>
                <Image style={pageStyle.line_img} source={right}/>
            </View>
            <View style={pageStyle.line}>
                <Text style={pageStyle.line_text}>修改密码</Text>
                <Image style={pageStyle.line_img} source={right}/>
            </View>

            <Modal animationType="slide"
                transparent={true}
                onRequestClose={()=>this.handleRequestClose()}
                visible={this.state.modalVisible}>
                <ModalContent 
                    cancel={()=>this.setState({modalVisible:false})} 
                    select={(info,type)=>this.handleSelect(info,type)}
                    type={this.state.type} />

            </Modal>
        </View>)
    }
}