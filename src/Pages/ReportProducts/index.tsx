

import * as React from 'react';
import { View ,FlatList} from 'react-native';
import {observer} from 'mobx-react'

import ReportProductsModel from './model';
import ReportProductItem from './ReportProductCard'
import {reportProductsStyle } from './style';
import HomeContainer from '../Home/HomeContainer';
import NetError from '../../Common/NetError';
import Loading from '../../Common/Loading';

@observer
class ReportProducts  extends React.Component{

    store = new ReportProductsModel();

    componentWillMount(){
        this.store.loadData()
    }

    render(){
        const {informations,loading,netError} =this.store
        return (
            <View style={reportProductsStyle.container}>
                {(!loading && !netError)? <FlatList 
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
                />:netError?<NetError />:<Loading/>}
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