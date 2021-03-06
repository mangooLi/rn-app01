

import  React ,{Component}from 'react';
import  {
    View,
    Image,
    Text,CameraRoll,TextInput
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';

import {modalStyle,modalStyle02} from './style';

interface Props{
    cancel():void;
    type:string;
    select(info:string,type:string):void;
}

export default class ModalContent extends Component<Props> {

    ipt:any;

    handleIpt(){
        if(this.ipt){
            const value = this.ipt._lastNativeText;
            this.props.select(value,'text');
            this.props.cancel()
        }
    }

    selectImgModal(){
        return (
            <View style={modalStyle.content}>
            <View style={[modalStyle.card,modalStyle.card01]}>
                <Text style={[modalStyle.card_text,modalStyle.card_text_border]} onPress={()=>this.takePicture()}>拍摄</Text>
                <Text style={[modalStyle.card_text]} onPress={()=>this.getFromRolll()}>从手机相册中选择</Text>
            </View>

             <View style={[modalStyle.card]}>
                <Text style={modalStyle.card_text} onPress={()=>this.props.cancel()}>取消</Text>
            </View>
        </View>
        )
    }

    changeNameModal(){
        return (<View style={modalStyle02.container}>
            <Text style={modalStyle02.text}>要叫什么新名字呢</Text>
            <TextInput 
                ref = {c=>this.ipt=c}
                style={modalStyle02.ipt}
                underlineColorAndroid="transparent"
                placeholder="请输入用户名"
                autoFocus
                onSubmitEditing={()=>this.handleIpt()}
            />
            <View style={modalStyle02.btn_container}>
                <Text style={modalStyle02.btn_left} onPress={()=>this.props.cancel()}>取消</Text>
                <Text style={modalStyle02.btn_right} onPress={()=>this.handleIpt()}>确认</Text>
            </View>
        </View>)
    }

    takePicture = async function () {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            //;
            console.log(image)
          });
    }
    getFromRolll(){
        ImagePicker.openPicker({ width: 300,
            height: 400,
            cropping: true
          }).then(image => {
            console.log(image)

          });
    }
    render (){
        return (<View style={modalStyle.container}>
            {this.props.type ==='text'? this.changeNameModal():this.selectImgModal()}
        </View>)
    }
}
