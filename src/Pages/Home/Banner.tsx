


import  React ,{Component}from 'react';
import  {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import moment from 'moment';
import Banner,{IndicaterType,IndicaterAlign} from 'react-native-whc-banner';
import {BannerItem} from '../../api';

import { bannerStyle } from './style';
import { handlePress } from './config';



interface Props{
    banners:BannerItem[]
}

export default class HomeBanner extends Component<Props>{

    renderImg(){
        const {banners}=this.props;

        return banners.map(bn=>
            <TouchableOpacity onPress={()=>handlePress(bn)} activeOpacity={1}>
            <View key={bn.id} style={bannerStyle.banner}>
                <Image style={bannerStyle.image} key={bn.id} source={{uri:bn.thumbnail_url}}/>
                <View style={bannerStyle.detail}>
                    <Text style={bannerStyle.detail_prefix}>{bn.prefix}</Text>
                    <Text style={bannerStyle.detail_title} numberOfLines={2} >{bn.title}</Text>
                    <Text style={bannerStyle.detail_date}>{moment(bn.date).format('MM-DD HH:mm:ss')}</Text>
                </View>
            </View>
            </TouchableOpacity>

        )
    }

    render(){
        return (
            <Banner style={bannerStyle.banner}
                indicaterType = {IndicaterType.circle}
                indicaterAlign={IndicaterAlign.right}
            >
                {this.renderImg()}
            </Banner>
        )
    }
}