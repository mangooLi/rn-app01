import {observable,action, toJS} from 'mobx';
import {DataHeroTopic,getDataHeroTopics,DataLabItemCategory} from '../../api';


export interface DataLabTopics {
    name:string;
    category:DataLabItemCategory

}

export default class Model {
    topics: DataLabTopics[] =[
        {name:'全部',category:DataLabItemCategory.all},
        {name:'活动报名',category:DataLabItemCategory.for_register},
        {name:'精彩回顾',category:DataLabItemCategory.for_review},
    ] ;
    
    @observable selectedTopic : DataLabTopics;
    


    

    @action 
    switchTopic(index:number){
        if(index<0 || index >=this.topics.length){
            index = 0;
        }
        const temp = this.topics[index] ;
        this.selectedTopic = observable(temp)
    }

  
}