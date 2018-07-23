


import  React ,{Component}from 'react';
import  {
    TouchableWithoutFeedback,
    ScrollView,
    Animated,
    View,
    Image
} from 'react-native';
import Banner,{IndicaterType} from 'react-native-whc-banner';
import {BannerItem} from '../../api';

import { homeStyle } from './style';



interface Props{
    banners:BannerItem[]
}

export default class HomeBanner extends Component<Props>{

    private _scrollView:any;

    constructor(props:Props){
        super(props)

    }

    
    _onTouchStart(){

    }
    _onTouchEnd(){

    }
    _onScroll(){}

    renderImg(){
        const {banners}=this.props;

        return banners.map(bn=>(
            <View key={bn.id} style={homeStyle.banner_image}>
                <Image style={homeStyle.banner_image} key={bn.id} source={{uri:bn.thumbnail_url}}/>
            </View>
        ))
    }

    render(){
        return (
            <Banner style={homeStyle.banner}
                indicaterType = {IndicaterType.number}
            >
                {this.renderImg()}
            </Banner>
        )
    }
}