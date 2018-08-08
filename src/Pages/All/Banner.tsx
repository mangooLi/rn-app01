


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
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { bannerStyle } from './style';




interface Props{
    banners:BannerItem[]
}

 class HomeBanner extends Component<Props & NavigationInjectedProps>{

    handlePress(item:BannerItem){
        // console.log(item)
        const {navigation} =this.props
        navigation.navigate('ArticleDetail',{id:item.id})
    }

    renderImg(){
        const {banners}=this.props;

        return banners.map(bn=>
            <TouchableOpacity key={bn.id} onPress={()=>this.handlePress(bn)} activeOpacity={1}>
            <View  style={bannerStyle.banner}>
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

export default withNavigation<Props>(HomeBanner)