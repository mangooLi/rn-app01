

import * as React from 'react';
import { View,Image, Text ,TouchableOpacity} from 'react-native';
import {moment} from '../../utils';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';


import {cardStyle} from './style';





 class ArticleBrief extends React.Component<NavigationInjectedProps & ReportProductItem>{

    
    handlePress(){
        const {navigation,id} =this.props

        navigation.push('ReportDetail',{id})
    }

    render(){
        const {thumbnail_url,title,date,report_images_count,show}=this.props;
        return (
            <TouchableOpacity onPress={(e)=>this.handlePress()} activeOpacity={1}>
            <View style={cardStyle.container} >

                {show? <Image style={cardStyle.img} source={{uri:thumbnail_url,cache:'force-cache'}}/>:<View style={[cardStyle.img,{backgroundColor:'#efefef'}]}/>}

                <Text style={cardStyle.title} >{title}</Text>
                <Text style={cardStyle.date} >{moment(date).format('yyyy-mm') }/{report_images_count}页</Text>
            </View>
            </TouchableOpacity>
        )
    }
}

export default withNavigation<ReportProductItem>(ArticleBrief)