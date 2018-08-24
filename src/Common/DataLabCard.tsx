
import  React ,{Component}from 'react';

import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import {getSize} from '../utils';
// import {dataLabStyle} from './style';
import moment from 'moment';
import 'moment/locale/zh-cn' 
import { NavigationInjectedProps, withNavigation } from 'react-navigation';



 class DataLabCard extends Component<DataLabItem   & NavigationInjectedProps>{



    handlePress(){
        const {navigation,id} =this.props
        navigation.navigate('ArticleDetail',{id})
    }
    render(){

        const {thumbnail_url,date,title,tags,address, }=this.props;
        return (
            <TouchableOpacity onPress={()=>this.handlePress()} activeOpacity={1}>
            <View style={dataLabStyle.container}>
                <Image style={dataLabStyle.img} source={{uri:thumbnail_url}}/>
                <View style={dataLabStyle.detail}>
                    <View style={dataLabStyle.detail_left}>
                        <Text style={dataLabStyle.detial_left_day}>{moment(date).format('DD')}</Text>
                        <Text style={dataLabStyle.detail_left_month}>{moment(date).format('MMMM')}</Text>
                    </View>
                    <View style={dataLabStyle.detail_right}>
                            <Text style={dataLabStyle.detail_title} numberOfLines={2}>{title}</Text>
                            <View style={dataLabStyle.detail_tagAndAddress}>

                                <Text style={dataLabStyle.detail_tag}>{tags.map(tag=>tag.name).join('・')}</Text>
                                <Text style={dataLabStyle.detail_address}>&nbsp;活动地点：{address}</Text>
                            </View>
                    </View>
                </View>
            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation<DataLabItem >(DataLabCard);


const dataLabStyle=StyleSheet.create({
    
    container:{
        height:getSize(192+4+52+20),
        width:getSize(343),
        paddingLeft:getSize(16),
    },

    img:{
        width:getSize(343),
        height:getSize(192),
        // marginTop:getSize(12)
    },
    detail:{
        width:getSize(343),
        flexDirection:'row',
        // paddingTop:getSize(12)
    },
    detail_left:{
        width:getSize(63),
        paddingLeft:getSize(4)
    },
    detial_left_day:{
        height:getSize(52),
        fontSize:getSize(44),
        color:'#333',
        marginTop:getSize(4)

    },
    detail_left_month:{
        height:getSize(20),
        fontSize:getSize(14),
        color:'#000'
    },
    detail_right:{
        flexGrow:1,
        paddingLeft:getSize(10),
        marginTop:getSize(12)

    },
    detail_title:{
        // height:getSize(40),
        fontSize:getSize(14),
        width:getSize(269),
        color:'#333',
    },
    detail_tagAndAddress:{
        flexDirection:'row',
        marginTop:getSize(2),
        height:getSize(17)
    },
    detail_tag:{
        // width:getSize(100),
        flex:7,
        fontSize:getSize(12),
        color:'#ee5e2b'
    },
    detail_address:{
        // width:getSize(169),
        flex:20,
        paddingLeft:getSize(11),
        fontSize:getSize(11),
        color:'#333'
    }
})