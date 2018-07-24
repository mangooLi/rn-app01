
import  React ,{Component}from 'react';
import {DataLabItem} from '../../api'
import {View,Text,Image} from 'react-native';
import {dataLabStyle} from './style';
import moment from 'moment';
import 'moment/locale/zh-cn' 


export default class DataLabCard extends Component<DataLabItem>{



    render(){

        const {thumbnail_url,date,title,place,tags,address,place_pinyin,category,state }=this.props;
        return (
            <View style={dataLabStyle.container}>
                <Text style={dataLabStyle.head}>数据侠实验室</Text>
                <Image style={dataLabStyle.img} source={{uri:thumbnail_url}}/>
                <View style={dataLabStyle.detail}>
                    <View style={dataLabStyle.detail_left}>
                        <Text style={dataLabStyle.detial_left_day}>{moment(date).format('DD')}</Text>
                        <Text style={dataLabStyle.detail_left_month}>{moment(date).format('MMMM')}</Text>
                    </View>
                    <View style={dataLabStyle.detail_right}>
                            <Text style={dataLabStyle.detail_title} numberOfLines={2}>{title}</Text>
                            <Text style={dataLabStyle.detail_tagAndAddress} numberOfLines={2}>
                                <Text style={dataLabStyle.detail_tag}>{tags.map(tag=>tag.name).join('・')}</Text>
                                <Text style={dataLabStyle.detail_address}>&nbsp;活动地点：{address}</Text>
                            </Text>
                    </View>
                </View>
            </View>
        )
    }
}