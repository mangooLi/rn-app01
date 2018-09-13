

import * as React from 'react';
import { View ,FlatList,DeviceEventEmitter} from 'react-native';

import {NavigationInjectedProps, withNavigation} from 'react-navigation';


import ReportProductItem from './ReportProductCard'
import {reportProductsStyle } from './style';
import HomeContainer from '../Home/HomeContainer';
import { getSize,WindowHeight } from '../../utils';





import {getReportProducts} from '../../api';

import LongList from '../../Common/LongList';


class ReportProductsList extends LongList<ReportProductItem,{}>{


    style=[reportProductsStyle.container,{height:WindowHeight-getSize(89)}]

    apiFn = (page:number)=>{
        return getReportProducts(page)
    }

    render_item (item:ReportProductItem,index:number){
        return (<View onLayout={(e)=>this._onItemLayout(e,index)}>
            <ReportProductItem {...item}  />
        </View>)
    }
}


class ReportProducts  extends React.Component<NavigationInjectedProps>{



    componentWillMount(){

        this.props.navigation.addListener('willFocus',()=>{
            DeviceEventEmitter.emit('ListRouteSwipeTo',{page:2})
        })
    }

    render(){

        return (
           <ReportProductsList />
        )
    }
}

const ReportWithNavigation =  withNavigation<{}>(ReportProducts);
export default ReportWithNavigation;

export class ReportProductsWithAnimate extends React.Component {

    render (){

        return <HomeContainer>
            <ReportWithNavigation />
        </HomeContainer>
    }
}