

import {observable,action,extendObservable, toJS } from 'mobx';
import {DataLabItem,DataHeroItem,DataFiftyItem,getDataPlanList} from '../../api';

export default class DataPlanModel{
    @observable  data_hero_informations:DataHeroItem[] = []
    @observable data_lab_informations:DataLabItem[] =[]
    @observable data_fifty_informations:DataFiftyItem[] =[]


    headList =[
        {source:require('../../assets/img/data_hero/ic.jpg') ,title:'数据侠专栏'},
        {source:require('../../assets/img/data_lab/ic.jpg'),title:'数据侠实验室'},
        {source:require('../../assets/img/data_fifty/ic50.jpg'),title:'数据科学50人'},
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
    }
}