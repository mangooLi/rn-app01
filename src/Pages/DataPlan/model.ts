

import {observable, } from 'mobx';
import {getDataPlanList,getDataHeroTopics} from '../../api';
import {DataHeroTopicStorage} from '../../utils/store';

export default class DataPlanModel{
    @observable  data_hero_informations:DataHeroItem[] = []
    @observable data_lab_informations:DataLabItem[] =[]
    @observable data_fifty_informations:DataFiftyItem[] =[]


    headList =[
        {source:require('../../assets/img/data_hero/ic.jpg') ,title:'数据侠专栏',navTo:'DataHeroColumn'},
        {source:require('../../assets/img/data_lab/ic.jpg'),title:'数据侠实验室',navTo:'DataLab'},
        {source:require('../../assets/img/data_fifty/ic50.jpg'),title:'数据科学50人',navTo:'DataFifty'},
    ]


    init (){
        getDataPlanList().then(res=>{
            if(res.data){

                const {data_hero_informations,data_lab_informations,data_fifty_informations} =res.data.data
                this.data_hero_informations = observable(data_hero_informations);
                this.data_lab_informations=observable(data_lab_informations);
                this.data_fifty_informations=observable(data_fifty_informations);
            }
        })
        getDataHeroTopics().then(res=>{
            if(res.data){
               
                DataHeroTopicStorage.setItem('topics',res.data.data)
            }
        })
    }
}