import React,{Component} from 'react';
import {View,Text} from 'react-native';
import DetailModel from './model';
import {observer} from 'mobx-react';
import {map} from '../../utils';
import ArticleBrief from '../../Common/ArticleBrief';

import {detailStyle,recommendationStyle, articleStyle} from './style'


interface Props{
    store:DetailModel
}

@observer
class Recommendations extends Component<Props> {



    render(){

        const {recommendations} =this.props.store
        return recommendations.length ?(
            <View style={recommendationStyle.container}>
                <Text style={recommendationStyle.title}>更多推荐</Text>
                {
                map(recommendations,rmd=>(
                    <ArticleBrief key={rmd.id} {...rmd}/>
                ))   
            }
            </View>
        ):null
    }
}

export default Recommendations;