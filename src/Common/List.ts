


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

    @observable
    showHead:boolean = true; //当flatList有headComponent的时候，显示headComponent

    @observable
    initialIndex :number = 0;

    startPage:number = 1;
    maxLength:number = 100;
    per:number = 20;

    
    total_page:number = 1;
    current_infos:T[] = [];
    push:boolean;  // 加载方向。true为顺序


    current_page:number = 0;
    prev_page:number = 0;
    next_page:number = 1;

    timestamp:number;




    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    @action
    init (id?:number,name?:string,type?:string){
        this.loadData()
    }

    @action
    pushInfo (list:T[]){
        this.informations.push(...list)
        this.showHead = this.startPage===1;

    }
    


    @action 
    loadData(page?:number){
        let now = Date.now()
        if(this.timestamp){
            if(now-this.timestamp <2000){
                this.timestamp = now;
                return Promise.resolve()
            }
        }
        this.timestamp = now;
        page = page || this.startPage;
        if( (page>this.total_page)|| this.loading )return Promise.resolve();


        this.loading = true;

        this.netError = false;
        return this.apiFn(page).then(res=>{
            if(!this.initialized){
                this.initialized = true;
            }
            if(this.loading === false)return; // 表示已经有地方提前结束了loading，此时不需要作任何处理。
            this.loading = false;
            if(res.data  ){
                this.current_page = res.data.meta.current_page;
                this.prev_page = res.data.meta.prev_page || 0;
                this.next_page = res.data.meta.next_page;
                this.total_page = res.data.meta.total_page;

                if(this.informations.length >this.maxLength){
                    this.informations.splice(0,this.per);
                    this.informations = observable(Array.from(this.informations))
                    this.startPage += 1
                }
                this.pushInfo(res.data.data);
            }
        }).catch(()=>{
            this.loading = false;
            this.netError = true;
        })
    }

    @action
    loadMore(){
        this.loadData(this.next_page)
    }



    @action
    reset (){
        this.informations.splice(0,this.informations.length);
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
        this.informations=observable([])
       this.startPage = this.startPage>1?this.startPage-1:1;
        
       return this.loadData(this.startPage);
       
    }


}