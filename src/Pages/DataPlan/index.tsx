

import * as React from 'react';
import { View ,Text,FlatList,ScrollView,NativeScrollEvent} from 'react-native';
import {observer} from 'mobx-react'


import DataPlanModel from './model'
import {map} from '../../utils';
import ArticleBrief from '../All/ArticleBrief';
import DataLabCard from '../All/DataLabCard'

import CardHead from './CardHead';
import DataFifty from './DataFiftyCard';
import TabBar from './TabBar';
import {dataPlanstyle} from './style';
import BottomBar from '../../Common/Bottombar';


@observer
export default class DataPlan extends React.Component{

    static navigationOptions={
        // tabBarVisible:false,
        header:null    //隐藏顶部导航栏
    }

    store = new DataPlanModel();

    componentWillMount(){
        this.store.init()
    }


    render (){
        const {data_hero_informations,data_lab_informations,data_fifty_informations,headList} =this.store;
        return (
        <View style={dataPlanstyle.container}>
            <TabBar />

            <ScrollView >
                <View style={dataPlanstyle.card}>
                    <CardHead {...headList[0]} />
                    {map(data_hero_informations,info=>(
                        <ArticleBrief key={info.id} {...info}/>
                    ))}
                </View>

                 {data_lab_informations && data_lab_informations.length ?  <View style={dataPlanstyle.card}>
                    <CardHead {...headList[1]}/>

                    <View style={dataPlanstyle.dataLabContainer0}>
                        <DataLabCard {...data_lab_informations[0]}/>
                    </View>
                    <View style={dataPlanstyle.dataLabContainer1}>
                        <DataLabCard {...data_lab_informations[1]}/>
                    </View>


                </View>:<View/>}

                {data_fifty_informations && data_fifty_informations.length 
                ?<View style={dataPlanstyle.card}>
                    <CardHead {...headList[2]}/>
                    {map(data_fifty_informations,info=>(
                        <View key={info.id} style={dataPlanstyle.fiftyContainer}>
                            <DataFifty {...info}/>
                        </View>
                    ))}
                </View>:<View/>

                }
            </ScrollView>
            <BottomBar />
        </View>
        )
    }
}