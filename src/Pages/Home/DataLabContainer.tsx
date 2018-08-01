

import  React ,{Component}from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import {DataLabItem} from '../../api';

import DataLabCard from './DataLabCard';


import {dataLabContainerStyle} from './style'


export default class DataLabContainer extends Component<DataLabItem>{

    render(){


        return (
            <View style={dataLabContainerStyle.container}>
                 <Text style={dataLabContainerStyle.head} >数据侠实验室</Text>
                <DataLabCard  {...this.props}/>
            </View>
        )
    }
}