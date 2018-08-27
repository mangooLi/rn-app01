

import {observable,action,extendObservable, toJS } from 'mobx';

import {getDataDiscoverInformations,getDataDiscoverTopic} from '../../api';
import List from '../../Common/List';

export default class DataDiscoverModel extends List<DataDiscoverItem>{




    @observable topics:DataDiscoverTopic[] = [];

    apiFn = (page:number)=>{
        return getDataDiscoverInformations(null,page)
    }

    



    @action
    loadTags(){
        getDataDiscoverTopic().then(res=>{
            if(res.data){
                this.topics = observable(res.data.data)
            }
        })
    }
}

