import  React ,{Component}from 'react';
import  {
    View,
    Image,
    Text,
    TouchableWithoutFeedback,Modal
} from 'react-native';
import TabBar from '../../Common/TabBar';
import {AcountInfo} from '../../api';
const right = require('../../assets/img/right0.png');
import {pageStyle,modalStyle} from './style'
import ModalContent from './ModalContent';

export default class AccountCenter extends Component {


    state={
        modalVisible:false
    }
    changeAvatar(){
        // alert('heihei')
        this.setState({modalVisible:true})
    }
    handleRequestClose(){
        this.setState({modalVisible:false})
    }

    render (){
        const user:AcountInfo = global.user;
        return (<View style={pageStyle.container}>
        <TabBar title = "我" style={{backgroundColor:'#f8f8f8',borderBottomColor:'#c8c7cc',}}/>
            <View style={pageStyle.head_container}>
                <TouchableWithoutFeedback onPress={()=>this.changeAvatar()}>
                    <Image style={pageStyle.head_img} source={{uri:user.avatar_url}}/>
                </TouchableWithoutFeedback>
                <Text style={pageStyle.head_name}>{user.nickname}</Text>
            </View>
            <View style={pageStyle.line}>
                <Text style={pageStyle.line_text}>修改用户名</Text>
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
                <ModalContent cancel={()=>this.setState({modalVisible:false})}/>

            </Modal>
        </View>)
    }
}