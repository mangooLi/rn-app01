


import {observable,action} from 'mobx';

import {Response} from '../api/request';
import uuid from 'uuid'


export default abstract class  List<T> {
    

    @observable informations:T[] = [];
    @observable netError:boolean = false;
    @observable initialized:boolean = false;

    @observable
    loading :boolean = false;

    @observable 
    headLoading:boolean = false;
    
    total_page:number = 1;
    current_page:number = 0;
    prev_page:number = 0;
    next_page:number = 1;




    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    @action
    init (id?:number,name?:string,type?:string){
        this.loadData()
    }


    @action
    addInfo (list:T[]){

        // this.informations = this.informations.concat(list);
        this.informations = observable(list)
        
    }

    

    @action 
    loadData(page?:number){
        page = page || this.next_page;
        if( (page>this.total_page)|| this.loading )return Promise.resolve();

        console.log('loading start ');
        this.loading = true;
        this.netError = false;
        return this.apiFn(page).then(res=>{
            if(!this.initialized){
                this.initialized = true;
            }
            if(this.loading === false)return; // 表示已经有地方提前结束了loading，此时不需要作任何处理。
            this.loading = false;
            if(res.data  ){
                this.addInfo(res.data.data);

                this.current_page = res.data.meta.current_page;
                this.prev_page = res.data.meta.prev_page || 0;
                this.next_page = res.data.meta.next_page;

                // this.pageToLoad = this.pageToLoad +1;
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
        // this.pageToLoad = 1;
        this.total_page =1;

        this.loading = false;
        this.initialized = false;

        this.current_page = 0;
        this.next_page =1;
        this.prev_page =0;
    }


    @action 
    loadPreData(){
        // this.headLoading = true;
        if(this.prev_page === 0){
            this.headLoading = false;
            return Promise.resolve()
        }
        return this.loadData(this.prev_page)
    }




}