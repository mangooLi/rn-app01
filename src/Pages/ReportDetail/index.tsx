
import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView,TouchableWithoutFeedback, Dimensions} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'
import Pdf from 'react-native-pdf';

import TabBar from './TabBar';

import  ReportDetailModel from './model';
import {reportDetailStyle} from './style';


@observer
export default class ReportDetail extends Component<NavigationInjectedProps>{


    store  =new ReportDetailModel();

    componentWillMount(){
        const id = this.props.navigation.getParam('id');
        this.store.init(id)
    }

    handlePress(){
        console.log(Dimensions.get('window'))
    }

    render(){
        const {pdf_url,page}=this.store;
        return (
            <View>
                <TabBar store={this.store}/>
                {pdf_url
                    ?<Pdf style={reportDetailStyle.pdf} source={{uri:pdf_url}} page={page} />
                    :<View style={reportDetailStyle.pdf}/>} 
            </View>
        )
    }
}