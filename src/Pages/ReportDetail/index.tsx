
import React,{Component} from 'react';
import {View ,Text,FlatList,ScrollView,StyleSheet, Dimensions} from 'react-native';


import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'
import Pdf from 'react-native-pdf';

import TabBar from './TabBar';

import  ReportDetailModel from './model';
import {reportDetailStyle} from './style';
import { getSize } from '../../utils';



@observer
export default class ReportDetail extends Component<NavigationInjectedProps>{


    store  =new ReportDetailModel();

    componentWillMount(){
        const id = this.props.navigation.getParam('id');
        this.store.init(id)
        
    }

    handlePress(){
        console.log(Dimensions.get('window'))
        // this.forceUpdate()
    }

    render(){
        const {pdf_url,page}=this.store;
        console.log(reportDetailStyle.pdf);
        
        console.log('render')
       const pdfStyle={
           width:Dimensions.get('window').width,
           height:Dimensions.get('window').height-getSize(40)
       }

        return (
            <View>
                <TabBar store={this.store}/>
                {pdf_url
                    ?<Pdf style={pdfStyle} fitPolicy={0} source={{uri:pdf_url}} page={page} />
                    :<View style={pdfStyle}/>} 
            </View>
        )
    }
}