
import React,{Component} from 'react';
import {View,Text,TouchableWithoutFeedback} from 'react-native';
import {NavigationInjectedProps,withNavigation} from 'react-navigation';

import {moment} from '../../utils';

import {listStyle} from './style';


class SearchItem extends Component<NavigationInjectedProps & SearchInformation> {

    handlePress(id:number){
        this.props.navigation.navigate('ArticleDetail',{id})
    }

    render (){
        const {tags,title,summary,date,id}=this.props;
        return (
            <TouchableWithoutFeedback onPress={()=>this.handlePress(id)}>
            <View style={listStyle.item}>
                <Text style={listStyle.tags}>{tags.map(tag=>tag.name).join('・')}</Text>
                <Text style={listStyle.title} numberOfLines={2}>{title}</Text>
                <Text style={listStyle.summary} numberOfLines={2}>{summary}</Text>
                <Text style={listStyle.date}>{moment(date).format('mm-dd HH:MM')}</Text>
            </View>
            </TouchableWithoutFeedback>
        )
    }
}

export default withNavigation<SearchInformation>(SearchItem)