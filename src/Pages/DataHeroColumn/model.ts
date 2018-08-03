

import {observable,action} from 'mobx';
import {DataHeroTopic,getDataHeroTopics} from '../../api';

export interface TabData extends DataHeroTopic{
    title:string
}

export default class Model {
    @observable topics: TabData[] =[] ;
    


    @action 
    loadTopics (){
        getDataHeroTopics().then(res=>{
            if(res.data){
                const topics = res.data.data;
                topics.forEach((topic:TabData) =>{
                    topic['title']=topic.name
                })
                this.topics = observable(topics as TabData[])
            }
        })
    }
}