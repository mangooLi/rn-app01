
import  React ,{Component}from 'react';

import {View,Text,Image,TouchableOpacity,StyleSheet} from 'react-native';
import {getSize,MyStyleSheetCreate} from '../utils';
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
                <Image style={dataLabStyle.img} source={{uri:thumbnail_url,cache:'force-cache'}}/>
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


const dataLabStyle=MyStyleSheetCreate({
    
    container:{
        height:192+4+52+20,
        width:343,
        paddingLeft:16,
    },

    img:{
        width:343,
        height:192,
        // marginTop:12
    },
    detail:{
        width:343,
        flexDirection:'row',
        // paddingTop:12
    },
    detail_left:{
        width:63,
        paddingLeft:4
    },
    detial_left_day:{
        height:52,
        fontSize:44,
        color:'#333',
        marginTop:4

    },
    detail_left_month:{
        height:20,
        fontSize:14,
        color:'#000'
    },
    detail_right:{
        flexGrow:1,
        paddingLeft:10,
        marginTop:12

    },
    detail_title:{
        // height:40,
        fontSize:14,
        width:269,
        color:'#333',
    },
    detail_tagAndAddress:{
        flexDirection:'row',
        marginTop:2,
        height:17
    },
    detail_tag:{
        // width:100,
        flex:7,
        fontSize:12,
        color:'#ee5e2b'
    },
    detail_address:{
        // width:169,
        flex:20,
        paddingLeft:11,
        fontSize:11,
        color:'#333'
    }
})