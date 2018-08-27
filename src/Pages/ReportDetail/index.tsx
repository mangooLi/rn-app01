
import React,{Component} from 'react';
import {View ,Text,ProgressBarAndroid,ScrollView,StyleSheet, Dimensions, LayoutChangeEvent} from 'react-native';

import { NavigationInjectedProps } from 'react-navigation';
import {observer} from 'mobx-react'
import Pdf from 'react-native-pdf';

// import TabBar from './TabBar';
import TabBar from '../../Common/TabBar';

import  ReportDetailModel from './model';
import {reportDetailStyle} from './style';
import { getSize } from '../../utils';




@observer
export default class ReportDetail extends Component<NavigationInjectedProps>{


    store  =new ReportDetailModel();

    // 屏幕竖直
    vertial:boolean = true;

    componentWillMount(){
        const id = this.props.navigation.getParam('id');
        this.store.init(id);
    }

  
    handleLayout(e:LayoutChangeEvent){
        
        const preVertial = this.vertial;
        const {width,height}=Dimensions.get('window');

        if(height>width){
            this.vertial = true
        }else{
            this.vertial = false;
        }
        if(this.vertial !== preVertial){
            this.forceUpdate()
        }
    }

    force(){
        this.forceUpdate()
    }

    render(){
        const {pdf_url,page,percent,title}=this.store;

        const pdfStyle= {
           width: Dimensions.get('window').width,
           height:percent===1? Dimensions.get('window').height-getSize(40):0

       }

        return (
            <View onLayout={(e)=>this.handleLayout(e)}   style={reportDetailStyle.container}>
                <TabBar title={title} />
                {percent<1 && <ProgressBarAndroid progress={percent} color='#f80' styleAttr="Horizontal"/>}

                {pdf_url 
                    ?<Pdf 
                        style={pdfStyle} 
                        fitPolicy={0} 
                        onLoadProgress={percent=>this.store.setProgress(percent)}
                        onLoadComplete={()=>this.store.setProgress(1)}
                        source={{uri:pdf_url}} 
                        activityIndicator={<View/>}
                        page={page} />
                    :<View style={pdfStyle}/>} 
            </View>
        )
    }
}