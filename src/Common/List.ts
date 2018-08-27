


import {observable,action} from 'mobx';

import {Response} from '../api/request';

export default abstract class  List<T> {
    

    @observable informations:T[] = [];
    @observable netError:boolean = false;
    
    pageToLoad:number = 1;
    total_page:number = 1;
    loading :boolean = false;

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
        if( (this.pageToLoad>this.total_page)|| this.loading )return;
        this.loading = true;
        this.netError = false;
        this.apiFn(this.pageToLoad).then(res=>{
            if(this.loading === false)return; // 表示已经有地方提前结束了loading，此时不需要作任何处理。
            this.loading = false;
            if(res.data  ){
                this.addInfo(res.data.data);
                this.pageToLoad = this.pageToLoad +1;
                this.total_page = res.data.meta.total_page;
            }
        }).catch(()=>{
            this.loading = false;
            this.netError = true;
        })
    }
    @action
    reset (){
        this.informations = observable([]);
        this.pageToLoad = 1;
        this.total_page =1;
        this.loading = false;
    }
}