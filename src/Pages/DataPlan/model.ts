

import {observable, } from 'mobx';
import {getDataPlanList,getDataHeroTopics} from '../../api';
import {DataHeroTopicStorage} from '../../utils/store';

export default class DataPlanModel{
    @observable  data_hero_informations:DataHeroItem[] = []
    @observable data_lab_informations:DataLabItem[] =[]
    @observable data_fifty_informations:DataFiftyItem[] =[];
    @observable loading :boolean = false;
    @observable netError:boolean = false



    headList =[
        {source:require('../../assets/img/data_hero/ic.jpg') ,title:'数据侠专栏',navTo:'DataHeroColumn'},
        {source:require('../../assets/img/data_lab/ic.jpg'),title:'数据侠实验室',navTo:'DataLab'},
        {source:require('../../assets/img/data_fifty/ic50.jpg'),title:'数据科学50人',navTo:'DataFifty'},
    ]


    init (){
        this.loading = true;
        // getDataPlanList().then(res=>{
        //     this.loading = false;
        //     if(res.data){

        //         const {data_hero_informations,data_lab_informations,data_fifty_informations} =res.data.data
        //         this.data_hero_informations = observable(data_hero_informations);
        //         this.data_lab_informations=observable(data_lab_informations);
        //         this.data_fifty_informations=observable(data_fifty_informations);
        //     }
        // })
        // getDataHeroTopics().then(res=>{
        //     if(res.data){
               
        //         DataHeroTopicStorage.setItem('topics',res.data.data)
        //     }
        // })

        Promise.all([getDataPlanList(),getDataHeroTopics()]).then(values=>{
            this.loading = false
            if(values[0] && values[0].data){

                const {data_hero_informations,data_lab_informations,data_fifty_informations} =(values[0].data as DataPlan).data
                this.data_hero_informations = observable(data_hero_informations);
                this.data_lab_informations=observable(data_lab_informations);
                this.data_fifty_informations=observable(data_fifty_informations);
            }

            if(values[1].data){
               
                DataHeroTopicStorage.setItem('topics',(values[1].data as {data:DataHeroTopic[]}).data)
            }
        }).catch(()=>{
            this.loading=false;
            this.netError=true
        })
    }
}