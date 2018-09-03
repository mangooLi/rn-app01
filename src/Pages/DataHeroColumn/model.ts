

import {observable,action,} from 'mobx';
import {getDataHeroTopics} from '../../api';
import { noop } from '../../utils';



export default class Model {
    @observable topics: DataHeroTopic[] =[] ;
    
    @observable selectedTopic : DataHeroTopic;
    default = { title: '全部', id: 0, name: '全部', introduction: '', logo_url: '', informations_count: 0 };

    @action 
    loadTopics (){
        getDataHeroTopics().then(res=>{
            if(res.data){
                const topics = res.data.data;  
                topics.unshift(this.default)              
                this.topics = observable(topics );
                this.selectedTopic = this.topics[0];
            }
        }).catch(noop)
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