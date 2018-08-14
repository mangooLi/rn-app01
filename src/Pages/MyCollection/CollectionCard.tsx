


import React,{Component} from 'react';
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native';
import {observer} from 'mobx-react';
import ArticleBrief from '../All/ArticleBrief';
import {DataDiscoverItem,DataLabItem,DataHeroItem,DataFiftyItem,CommentItem , getAccountCollection} from '../../api';
import CollectionModel from './model';
import {cardStyle} from './style';
import CommentCard from '../Comment/CommentCard';

const circleCheck = require('../../assets/img/checkCircle.png');
interface Prop{
    article:DataDiscoverItem|DataLabItem|DataHeroItem|DataFiftyItem|CommentItem,
    store:CollectionModel
}


@observer
export default class CollectionCard extends Component<Prop> {


    render(){
        const {store,article} =this.props;
        const {checkList,checkAll,type}=store;
        return (<View style={cardStyle.card_container}>
            <TouchableWithoutFeedback onPress={()=>store.toggleCheckItem(article.id)}>
                <View style={cardStyle.card_imgContainer}>
                    {(checkList.includes(article.id) || checkAll) &&  <Image style={cardStyle.img} source={circleCheck}/>}
                </View>
            </TouchableWithoutFeedback>
            {type ==='article'? <ArticleBrief {...this.props.article as DataDiscoverItem}/> :<CommentCard {...this.props.article as CommentItem} />} 
        </View>)
    }
}

