

import React,{Component} from 'react';
import {View,Text,Image,ScrollView,TouchableOpacity} from 'react-native';
import {moment,map,MyStyleSheetCreate} from '../utils';
import  {reportStyle} from '../Pages/All/style'
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


export interface ReportProps{
    list:ReportProductItem[],

}

class Report extends Component<ReportProps & NavigationInjectedProps> {

    handlePress(item:ReportProductItem){
        this.props.navigation.navigate('ReportDetail',{id:item.id})
    }

    ReportItmm(item:ReportProductItem){

        const {thumbnail_url,title,date,id}=item;
        return (
            <TouchableOpacity key={id} onPress={()=>this.handlePress(item)} activeOpacity={1}>
            <View  style={reportStyle.card}>
                <Image style={reportStyle.img} source={{uri:thumbnail_url,cache:'force-cache'}}/>
                <Text style={reportStyle.title} numberOfLines={1} >{title}</Text>
                <Text style={reportStyle.date}>{moment(date).format('YYYY-MM-DD HH:mm')}</Text>
            </View>
            </TouchableOpacity>
        )
    }
    
    render (){
        const {list}=this.props;
        return (

            <View style={reportStyle.container}>
            <Text style={reportStyle.head}>数据报告</Text>
            <View style={reportStyle.cardContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {map(list,report=>this.ReportItmm(report))}
                </ScrollView>
            </View>
            

            </View>
        )
    }
}

export default withNavigation<ReportProps>(Report)



