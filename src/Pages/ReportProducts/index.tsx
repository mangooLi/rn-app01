

import * as React from 'react';
import { View ,FlatList} from 'react-native';
import {observer} from 'mobx-react'

import ReportProductsModel from './model';
import ReportProductItem from './ReportProductCard'
import {reportProductsStyle } from './style';
import HomeContainer from '../Home/HomeContainer';

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
                        <View style={reportProductsStyle.footer}/>
                    }
                />
            </View>
        )
    }
}

export default ReportProducts;


export class ReportProductsWithAnimate extends React.Component {

    render (){

        return <HomeContainer>
            <ReportProducts/>
        </HomeContainer>
    }
}