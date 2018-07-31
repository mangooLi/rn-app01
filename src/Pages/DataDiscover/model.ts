

import {observable,action,extendObservable, toJS } from 'mobx';

import {DataDiscoverItem,getDataDiscoverInformations,getDataDiscoverTopic,DataDiscoverTopic} from '../../api'

export default class DataDiscoverModel{


    @observable informations:DataDiscoverItem[] = [];

    @observable topics:DataDiscoverTopic[] = [];

    pageToLoad :number  =1;
    total_page:number = 1;
    loadding:boolean = false

    @action
    loadData(){
        if(this.pageToLoad>this.total_page)return
        getDataDiscoverInformations(null, this.pageToLoad).then(res=>{
            if(res.data){
                this.addInformations(res.data.data);
                if(this.pageToLoad<=res.data.meta.total_page){
                    this.pageToLoad=this.pageToLoad+1;
                    this.total_page=res.data.meta.total_page;
                }
            }
        })
    }



    @action
    addInformations(list:DataDiscoverItem[]){
        let pre = toJS(this.informations);
        pre=pre.concat(list);
        this.informations = observable(pre)
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

