

import React,{Component} from 'react';
import {View,Text,Image,ScrollView} from 'react-native';
import {ReportProductItem} from '../../api';
import {moment,map} from '../../utils';
import  {reportStyle} from './style'

export interface ReportProps{
    list:ReportProductItem[],
}

export default class Report extends Component<ReportProps> {



    ReportItmm(item:ReportProductItem){

        const {thumbnail_url,title,date,id}=item;
        return (
            <View key={id} style={reportStyle.card}>
                <Image style={reportStyle.img} source={{uri:thumbnail_url}}/>
                <Text style={reportStyle.title} numberOfLines={1} >{title}</Text>
                <Text style={reportStyle.date}>{moment(date).format('YYYY-MM-DD HH:mm:ss')}</Text>
            </View>
        )
    }
    
    render (){
        const {list}=this.props;
        return (

            <View style={reportStyle.container}>
            <Text style={reportStyle.head}>数据报告</Text>
            <View style={reportStyle.cardContainer}>
                <ScrollView horizontal>
                    {map(list,report=>this.ReportItmm(report))}
                </ScrollView>
            </View>
            

            </View>
        )
    }
}



