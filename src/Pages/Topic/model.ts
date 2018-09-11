

import {observable,action, toJS } from 'mobx';
import {getDataDiscoverInformations, getDataHeroInformations} from '../../api'
import List from '../../Common/List';


export default class TopicModel extends List<DataDiscoverItem|DataHeroItem>{

    @observable id:number;
    @observable name:string;
    type:string;

    @action
    init (config:InitConfig){
        super.init(config)
        
        this.id=config.id||0;
        this.name=config.name||'';
        this.type = config.type||''
        this.loadData()
    }

    

    apiFn =(page:number)=>{
        switch (this.type){
            case 'data_hero_information':return getDataHeroInformations(this.id,page);break;
            case 'data_discover_information':return getDataDiscoverInformations(this.id,page);break;
            default: return getDataDiscoverInformations(this.id,page)
        }

    }


    
}