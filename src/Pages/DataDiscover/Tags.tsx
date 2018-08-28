

import React,{Component} from 'react';
import { View ,Text,ScrollView,Image,TouchableWithoutFeedback} from 'react-native';
import { NavigationInjectedProps, withNavigation } from 'react-navigation';

import {dataDiscoverStyle,tagsStyle} from './style'
import {observer} from 'mobx-react'
import DataDiscoverModel from './model';
import {map,MyStyleSheetCreate} from '../../utils';


interface Props{
    store:DataDiscoverModel
}

@observer
class Tags extends Component<NavigationInjectedProps & Props>{

    componentWillMount(){
        this.props.store.loadTags()
    }

    handlePress(topic:DataDiscoverTopic){
        const {id,name}=topic;
        this.props.navigation.navigate('Topic',{id,name})
    }

    render(){

        const {topics}=this.props.store;
        return (
            <View style={dataDiscoverStyle.tags}>
                <ScrollView horizontal={true} style={tagsStyle.topic_container} showsHorizontalScrollIndicator={false}>
                    {map(topics,topic=>(
                        <TouchableWithoutFeedback key={topic.id} onPress={()=>this.handlePress(topic)}>
                        <View style={tagsStyle.topic}>
                            <Image style={tagsStyle.image} source={{uri:topic.logo_url}}/>
                            <Text style={tagsStyle.text}>{topic.name}</Text>
                        </View>
                        </TouchableWithoutFeedback>
                    ))}
                </ScrollView>
            </View>
        )
    }
}

export default  withNavigation<Props>(Tags) ;