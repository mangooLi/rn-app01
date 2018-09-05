
import  React ,{Component}from 'react';

import {View,Text,TouchableOpacity} from 'react-native';
import FastImage from 'react-native-fast-image'
import {MyStyleSheetCreate} from '../utils';
// import {dataLabStyle} from './style';
import moment from 'moment';
import 'moment/locale/zh-cn' 
import { NavigationInjectedProps, withNavigation } from 'react-navigation';



 class DataLabCard extends Component<DataLabItem   & NavigationInjectedProps>{


    handlePress(){
        const {navigation,id} =this.props
        navigation.navigate('ArticleDetail',{id})
    }

    shouldComponentUpdate(nextProp:DataLabItem){
       return nextProp.id !== this.props.id;
    }
    render(){

        const {thumbnail_url,date,title,tags,category,state, place}=this.props;

        let labState = '',stateIndex = 0;
        if(category ==='for_review'){
            labState='精彩回顾';stateIndex = 3;
        }else if(state === 'ended'){
            labState='已结束';stateIndex = 2;
        }else if(state === 'living'){
            labState = '正在报名';stateIndex = 1;
        }else if(state === 'to_begin'){
            labState = '即将开始';stateIndex = 0;
        }   

        return (
            <TouchableOpacity onPress={()=>this.handlePress()} activeOpacity={1}>
            <View style={dataLabStyle.container}>
                <Text style={[dataLabStyle.state,dataLabStyle[`stateColor${stateIndex}`]]}>{labState}</Text>
                <FastImage style={dataLabStyle.img} source={{uri:thumbnail_url}}/>
                   
                <View style={dataLabStyle.detail}>
                    <View style={dataLabStyle.detail_left}>
                        <Text style={dataLabStyle.detial_left_day}>{moment(date).format('DD')}</Text>
                        <Text style={dataLabStyle.detail_left_month}>{moment(date).format('MMMM')}</Text>
                    </View>
                    <View style={dataLabStyle.detail_right}>
                            <Text style={dataLabStyle.detail_title} numberOfLines={2}>{title}</Text>
                            <View style={dataLabStyle.detail_tagAndAddress}>

                                <Text style={dataLabStyle.detail_tag}>{tags && tags.map(tag=>tag.name).join('・')}</Text>
                                <Text numberOfLines={1} style={dataLabStyle.detail_address}>&nbsp;活动地点：{place|| ""}</Text>
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
    state:{
        height:28,
        lineHeight:28,
        fontSize:14,
        paddingLeft:6,
        paddingRight:6,
        // backgroundColor:'#d95528',
        position:'absolute',
        top:192-28,
        zIndex:100,
        left:16,
        // color:'#fff',
        borderBottomLeftRadius:4
    },
    stateColor0:{ //即将开始
        backgroundColor:'#fff',
        color:'#f05e1c'

    },
    stateColor1:{ //进行中
        backgroundColor:'#f05e1c',
        color:'#fff'

    },
    stateColor2:{ //已结束
        backgroundColor:'#666',
        color:'#fff'
    },
    stateColor3:{ //精彩回顾
        backgroundColor:'#000',
        color:'#fff'
    },      
    img:{
        width:343,
        height:192,
        // marginTop:12
        borderRadius:4
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