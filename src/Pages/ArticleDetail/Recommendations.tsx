import React,{Component} from 'react';
import {View,Text} from 'react-native';
import DetailModel from './model';
import {observer} from 'mobx-react';
import {map} from '../../utils';
import ArticleBrief from '../Home/ArticleBrief';

import {detailStyle,recommendationStyle, articleStyle} from './style'


interface Props{
    store:DetailModel
}

@observer
class Recommendations extends Component<Props> {


    componentWillMount(){
        console.log('geng duo tuijian ')
    }

    render(){

        const {recommendations} =this.props.store
        return recommendations.length ?(
            <View >
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