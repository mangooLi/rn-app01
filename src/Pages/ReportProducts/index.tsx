

import * as React from 'react';
import { View ,Text,FlatList,ScrollView,NativeScrollEvent} from 'react-native';
import {observer} from 'mobx-react'

import ReportProductsModel from './model';
import ReportProductItem from './ReportProductCard'
import {reportProductsStyle } from './style';

@observer
class ReportProducts  extends React.Component{

    store = new ReportProductsModel();


    componentWillMount(){
        this.store.loadData()
    }

    render(){
        const {informations} =this.store
        return (
            <View style={reportProductsStyle.container}>
                <FlatList 
                    data={informations}
                    renderItem={({item})=>{
                        return <ReportProductItem {...item}  />
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                    onEndReached={()=>this.store.loadData()}
                    onEndReachedThreshold={0.1}
                    ListFooterComponent={
                        <View style={reportProductsStyle.footer}>
                            <Text></Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

export default ReportProducts