

import * as React from 'react';
import { View,Image, Text ,TouchableOpacity,GestureResponderEvent} from 'react-native';
import moment from 'moment';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import {ReportProductItem} from '../../api'
import {cardStyle} from './style';





 class ArticleBrief extends React.Component<NavigationInjectedProps & ReportProductItem>{

    
    handlePress(e:GestureResponderEvent){
        const {navigation,id} =this.props
        // console.log('article brief pressed')
        // console.log (e)
        // console.log(e.nativeEvent)
        // console.log(e.target)

        navigation.push('ArticleDetail',{id})
    }

    render(){
        const {thumbnail_url,title,date,report_images_count}=this.props;
        return (
            <TouchableOpacity onPress={(e)=>this.handlePress(e)} activeOpacity={1}>
            <View style={cardStyle.container} >
                <Image style={cardStyle.img} source={{uri:thumbnail_url}}/>
                <Text style={cardStyle.title} >{title}</Text>
                <Text style={cardStyle.date} >{moment(date).format('YYYY-MM') }/{report_images_count}页</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation<ReportProductItem>(ArticleBrief)