


import  React ,{Component}from 'react';
import  {
    View,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';

import Banner,{IndicaterType,IndicaterAlign} from '../../vendor/react-native-whc-banner';

import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import { bannerStyle } from './style';
import homeModel from '../Home/model';
import { getSize,moment } from '../../utils';





interface Props{
    banners:BannerItem[]
}

 class HomeBanner extends Component<Props & NavigationInjectedProps>{

    handlePress(item:BannerItem){
        //
        const {navigation} =this.props
        navigation.navigate('ArticleDetail',{id:item.information_id,type:item.information_type})
    }

    renderImg(bn:BannerItem,id?:string|number){
        // const {banners}=this.props;

        return (
            <TouchableOpacity key={id|| bn.id} onPress={()=>this.handlePress(bn)} activeOpacity={1}>
            <View  style={bannerStyle.banner}>
                <Image style={bannerStyle.image} key={bn.id}  source={{uri:bn.thumbnail_url,cache:'force-cache'}}/>
                <View style={bannerStyle.detail}>
                    <Text style={bannerStyle.detail_prefix}>{bn.prefix}</Text>
                    <Text style={bannerStyle.detail_title} numberOfLines={2} >{bn.title}</Text>
                    <Text style={bannerStyle.detail_date}>{moment(bn.date).format('mm-dd HH:MM')}</Text>
                </View>
            </View>
            </TouchableOpacity>

        )
    }


    render(){
        const {banners}=this.props;
        return (
            banners.length? <Banner style={bannerStyle.banner}
                store = {homeModel}
                top ={getSize(212.5-45)}
                indicaterType = {IndicaterType.circle}
                indicaterAlign={IndicaterAlign.right}
                firstChild = {this.renderImg(banners[0],'first')}
                lastChild = {this.renderImg(banners[banners.length-1],'last')}
            >
                {/* {this.renderImg()} */}
                {banners.map(bn=>this.renderImg(bn))}
            </Banner>:<View/>
        )
    }
}

export default withNavigation<Props>(HomeBanner)