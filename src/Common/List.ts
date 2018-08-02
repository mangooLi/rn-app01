


import {observable,action} from 'mobx';

import {Meta} from '../api';
import {Response} from '../api/request';

export default abstract class  List<T> {
    

    @observable informations:T[] = [];
    
    pageToLoad:number = 1;
    total_page:number = 1;
    loadding :boolean = false;

    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    @action
    init (){
        this.loadData()
    }


    @action
    addInfo (list:T[]){
        let pre =this.informations;
        pre = pre.concat(list);
        this.informations = observable(pre)
    }

    @action 
    loadData(){
        if( (this.pageToLoad>this.total_page)|| this.loadding )return;
        this.loadding = true;
        this.apiFn(this.pageToLoad).then(res=>{
            this.loadding = false;
            if(res.data){
                this.addInfo(res.data.data);
                this.pageToLoad = this.pageToLoad +1;
                this.total_page = res.data.meta.total_page;
            }
        }).catch(()=>{
            this.loadding = false;
        })
        
    }
}