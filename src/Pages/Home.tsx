

import * as React from 'react';
import { View ,FlatList,Text} from 'react-native';
import {getDataPlanList,DataHeroInformation,DataLabInformation,DataFiftyInformation} from '../api'
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
            if(res.data){
                this.setState({
                    data_hero_list:res.data.data. data_hero_informations,
                    data_lab_list:res.data. data.data_lab_informations,
                    data_fifty_list:res.data.data.data_fifty_informations
                })
            }
           
        })
    }

    render(){
        const {data_hero_list,data_lab_list,data_fifty_list}=this.state;
        return (
            <View style={styles.container} testID='homePage'>

                <FlatList
                    data={[...data_hero_list,...data_lab_list,...data_fifty_list]}
                    renderItem={({item})=>{
                        return <ArticleBrief key={Math.random()} {...item}/>
                    }}
                    keyExtractor={(index) => String(index)+String(Math.random())}
                />
                

            </View>
        )
    }
}