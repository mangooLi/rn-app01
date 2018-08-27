

import {observable,action,extendObservable, toJS } from 'mobx';
import {getDataDiscoverInformations, } from '../../api'


export default class TopicModel {

    @observable id:number;
    @observable name:string;
    @observable informations:DataDiscoverItem[]=[];
    pageToLoad:number =1;
    total_page:number =1;
    loading :boolean = false;

    @action
    init (id:number,name:string){
        this.id=id;
        this.name=name;
        this.loadData()
    }

    @action
    addInfo (infos:DataDiscoverItem[]){
        let pre = toJS(this.informations);
        pre=pre.concat(infos);
        this.informations=observable(pre)
    }


    @action
    loadData(){
        if( (this.pageToLoad>this.total_page) || this.loading)return
        this.loading = true;
        getDataDiscoverInformations(this.id,this.pageToLoad).then(res=>{
            this.loading = false;
            if(res.data){
                this.addInfo(res.data.data);
                if(this.pageToLoad<=res.data.meta.total_page){
                    this.pageToLoad=this.pageToLoad+1;
                    this.total_page=res.data.meta.total_page;
                }
            }
        }).catch(()=>{
            this.loading = false;
        })
    }
}