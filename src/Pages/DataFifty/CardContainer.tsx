import React, { Component } from 'react'



import {View,}from 'react-native';
import DataFiftyCard from '../DataPlan/DataFiftyCard';
import {dataFiftyStyle} from './style'
import {DataFiftyItem} from '../../api'

export default class CardContainer extends Component<DataFiftyItem>{

    render(){
        return (
            <View style={dataFiftyStyle.cardContainer} >
             <DataFiftyCard {...this.props}  />
            </View>
        )
    }
}