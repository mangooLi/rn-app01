

import * as React from 'react';
import { View, Text ,FlatList} from 'react-native';
import {getDataPlanList,DataHeroInformation,DataLabInformation,DataFiftyInformation} from '../api/index'
import ArticleBrief from './ArticleBrief';

import styles from '../style';
interface State{
    data_hero_list:DataHeroInformation[];
    data_lab_list:DataLabInformation[];
    data_fifty_list:DataFiftyInformation[]
}

export default class HomePage extends React.Component{

   state:State={
       data_hero_list:[],
       data_lab_list:[],
       data_fifty_list:[]
   }


    componentWillMount(){
        getDataPlanList().then(res=>{
            this.setState({
                data_hero_list:res.data_hero_informations,
                data_lab_list:res.data_lab_informations,
                data_fifty_list:res.data_fifty_informations
            })
        })
    }

    render(){
        const {data_hero_list,data_lab_list,data_fifty_list}=this.state;
        return (
            <View style={styles.container}>

                <FlatList
                    data={data_hero_list}
                    renderItem={({item})=>{
                        return <ArticleBrief  {...item}/>
                    }}
                />
                <FlatList
                    data={data_lab_list}
                    renderItem={({item})=>{
                        return <ArticleBrief  {...item}/>
                    }}
                />
                <FlatList
                    data={data_fifty_list}
                    renderItem={({item})=>{
                        return <ArticleBrief  {...item}/>
                    }}
                />

            </View>
        )
    }
}