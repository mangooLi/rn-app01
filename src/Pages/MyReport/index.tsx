

import React,{Component} from 'react';
import {View,FlatList} from 'react-native';
import {observer} from 'mobx-react'
import TabBar from '../../Common/TabBar';
import Model from './model';
import ReportCard from '../ReportProducts/ReportProductCard';

import {pageStyle} from './style';

@observer
export default class MyReport extends Component {

    store=new Model();

    componentWillMount(){
        this.store.loadData()
    }


    render (){
        const {informations}=this.store;
        return (<View>
            <TabBar title="我的报告"/>

            <FlatList 
                // style={dataFiftyStyle.flatList}
                data={informations}
                renderItem={({item})=>{
                    return  <ReportCard {...item} />
                }}
                keyExtractor={item => item.id+''}
                onEndReached={()=>this.store.loadData()}
                onEndReachedThreshold={0.2}
                ListFooterComponent={
                    <View style={pageStyle.footer} />
                }
            />

        </View>)
    }
}

