

import  React ,{Component}from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';


import DataLabCard from '../../Common/DataLabCard';


import {dataLabContainerStyle} from './style'


export default class DataLabContainer extends Component<DataLabItem & {hide?:boolean}>{

    render(){


        return (
            <View>
                <View style={dataLabContainerStyle.container}>
                    <Text style={dataLabContainerStyle.head} >数据侠实验室</Text>
                    <DataLabCard  {...this.props}/>
                </View>
            </View>
        )
    }
}