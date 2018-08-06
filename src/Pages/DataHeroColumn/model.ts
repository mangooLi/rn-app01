

import {observable,action, toJS} from 'mobx';
import {DataHeroTopic,getDataHeroTopics} from '../../api';



export default class Model {
    @observable topics: DataHeroTopic[] =[] ;
    
    @observable selectedTopic : DataHeroTopic;
 

    @action 
    loadTopics (){
        getDataHeroTopics().then(res=>{
            if(res.data){
                const topics = res.data.data;                
                this.topics = observable(topics );
                this.selectedTopic = this.topics[0];
            }
        })
    }

    @action 
    switchTopic(index:number){
        if(index<0 || index >=this.topics.length){
            index = 0;
        }
        const temp = this.topics[index] ;
        this.selectedTopic = observable(temp)
    }

  
}