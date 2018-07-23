

import * as React from 'react';
import { View ,FlatList} from 'react-native';
import {getHomePageAllList,HomePageAll} from '../../api'
import ArticleBrief from './ArticleBrief';
import Banner from './Banner';

import styles from '../../style';


export default class HomePage extends React.Component{

    static navigationOptions={
        // tabBarVisible:false,
        // header:null    //因此顶部导航栏
    }

   
   state:HomePageAll={
       banners:[],
       data_discover:[],
       data_lab:[],
       data_hero:[],
       data_visualization:[],
       report_product:[]
   }


    componentWillMount(){
        getHomePageAllList().then(res=>{
            console.log('res',res.data)
            if(res.data){
                this.setState({
                   banners:res.data.banners,
                   data_discover:res.data.data_discover,
                   data_lab:res.data.data_lab,
                   data_hero:res.data.data_hero,
                   data_visualization:res.data.data_visualization,
                   report_product:res.data.report_product
                })
            }
           
        })
    }

    render(){
        const {banners, data_discover,data_lab,data_hero,data_visualization,report_product}=this.state;
        return (
            <View style={styles.container} testID='homePage'>
                <Banner banners={banners}/>
                <FlatList
                    data={[...data_discover,...data_lab,...data_hero,...data_visualization,...report_product]}
                    renderItem={({item})=>{
                        return <ArticleBrief key={Math.random()} {...item}/>
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                />

            </View>
        )
    }
}