

import React,{Component} from 'react';
import {View,Text, ScrollView,NativeSyntheticEvent,NativeScrollEvent} from'react-native';
import {WindowWidth} from '../../utils';

import HomeBar from './HomeBar';

import AllPage from '../All';
import DataDiscover from '../DataDiscover';
import DataReport from '../ReportProducts';
import {pageStyle} from './style';
export default class Home extends Component {

    sc:any;

    endDrag(e:NativeSyntheticEvent<NativeScrollEvent> | undefined){
        if(!e)return;
        const x = e.nativeEvent.contentOffset.x;
        let position_x = this.getRoundx(x);
        this.sc.scrollTo({x:position_x,y:0,animated:true})
    }


    getRoundx(x:number){
        let result = 0;
        if(x<WindowWidth/2){
            result =0;
        }else if(x < WindowWidth * 1.5){
            result = WindowWidth;
        }else if(x<WindowWidth * 2.5){
            result = 2*WindowWidth;
        }else {
            result = 3 * WindowWidth
        }

        return result;
    }

    toPage(page:number){
        const position_x = (page-1)*WindowWidth;
        this.sc.scrollTo({x:position_x,y:0,animated:true})
    }

    render (){

        return (
           
            <View>
                <HomeBar toPage={(page)=>this.toPage(page)}/>
                <ScrollView 
                    ref = {c=>this.sc = c}
                    horizontal = {true}
                    onScrollEndDrag = {(e)=>this.endDrag(e)}
                    style={pageStyle.scroll}
                >
                    <AllPage />
                    <DataDiscover />
                    <DataReport />


                </ScrollView>
            </View>

        )
    }
}