

import {observable,action, toJS } from 'mobx';
import {getDataDiscoverInformations, getDataHeroInformations} from '../../api'
import List from '../../Common/List';


export default class TopicModel extends List<DataDiscoverItem|DataHeroItem>{

    @observable id:number;
    @observable name:string;
    type:string;

    @action
    init (id:number,name:string,type:string){
        this.id=id;
        this.name=name;
        this.type = type
        this.loadData()
    }

    

    apiFn =()=>{
        switch (this.type){
            case 'data_hero_information':return getDataHeroInformations(this.id,this.pageToLoad);break;
            case 'data_discover_information':return getDataDiscoverInformations(this.id,this.pageToLoad);break;
            default: return getDataDiscoverInformations(this.id,this.pageToLoad)
        }

    }


    
}