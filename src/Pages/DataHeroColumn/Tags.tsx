



import React,{Component} from 'react';
import {View,ScrollView,TouchableWithoutFeedback,FlatList,Text} from 'react-native';
import {map} from '../../utils';
import {tagsStyle} from './style';
import Model from './model'


export default class Tags extends Component<{store:Model}> {


    handlePress(index:number){
        this.props.store.switchTopic(index)
    }

    render (){
        const {topics} =this.props.store
        return (
            <View style={tagsStyle.tags}>
                <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator = {false}
                bounces = {true}
                style={tagsStyle.topic_container}>
                    {map(topics,(topic,index)=>(
                        <TouchableWithoutFeedback key={index} onPress={()=>this.handlePress(index)}>
                        <View style={tagsStyle.topic}>
                            <Text style={tagsStyle.text}>{topic.name}</Text>
                        </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
            </View>
        )
    }
}