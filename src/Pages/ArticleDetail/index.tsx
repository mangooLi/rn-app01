import React,{Component} from 'react';
import {Text,View,Image,ScrollView} from'react-native';
import {NavigationInjectedProps} from 'react-navigation';

// import DetailModel from './model';

import Article from './Article';
import TabBar from './TabBar';
import {detailStyle} from './style'
import styles from '../../style';



class ArticleDetail extends Component<NavigationInjectedProps> {

    
    // store = new DetailModel()

    state:any={}

    static navigationOptions={
        tabBarVisible:true,
        // header:    //隐藏顶部导航栏
    }


    componentWillMount(){
        const id=this.props.navigation.getParam('id');
       this.setState({id})
    }

    render (){
        return (
            <View style={detailStyle.pageContainer}>
                <TabBar />
                <View style={detailStyle.container}>
                    <ScrollView>
                        <Article id={this.state.id}/>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

export default ArticleDetail;