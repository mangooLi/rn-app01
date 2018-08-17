import React,{Component} from 'react';
import {View} from 'react-native';
import  DataLabCard from '../../Common/DataLabCard';

import {DataLabItem} from '../../api';
import {cardContainerStyle} from './style';


export default class LabContainer extends Component<DataLabItem> {

    render (){
        return (
            <View style={cardContainerStyle.container}>
                <DataLabCard {...this.props} />
            </View>
        )
    }
}


