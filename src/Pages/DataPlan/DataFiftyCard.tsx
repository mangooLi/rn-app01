



import  React,{PureComponent,Component} from 'react';
import { View ,Image, Text,TouchableWithoutFeedback} from 'react-native';

import {fiftyStyle} from './style';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';

class DataFiftyCard extends Component<DataFiftyItem & NavigationInjectedProps>{

    shouldComponentUpdate (nextProp:DataFiftyItem){
        return nextProp.id !== this.props.id;
    }

    render(){
        const {data_scientist_app_avatar_url,id, data_scientist_avatar_url,data_scientist_name,data_scientist_introduction,show}=this.props;
        return (
        <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ArticleDetail',{id})}>
            <View style={fiftyStyle.container}>
                {show?<Image style={fiftyStyle.img} source={{uri:data_scientist_app_avatar_url||data_scientist_avatar_url,cache:'force-cache'}}/>:<View style={[fiftyStyle.img,{backgroundColor:'#efefef'}]}/>}
                <View style={fiftyStyle.person}>
                    <Text style={fiftyStyle.name}>{data_scientist_name}</Text>
                    <Text numberOfLines={7} style={fiftyStyle.introduction}>{data_scientist_introduction}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation<DataFiftyItem>(DataFiftyCard)