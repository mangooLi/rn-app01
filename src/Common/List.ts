


import {observable,action} from 'mobx';

import {Response} from '../api/request';



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

    _limit:boolean = false;

    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    @action
    init (config?:InitConfig){
        if(config && config.limit){
            this._limit = true;
        }
    }
    @action
    pushInfo (list:T[]){
        this.informations.push(...list)
        this.showHead = this.startPage===1;

    }
    @action 
    loadData(page?:number){
        console.log('loading ')
        page = page || this.startPage;
        if( (page>this.total_page)|| this.loading )return Promise.resolve();

        this.loading = true;

        this.netError = false;
        return this.apiFn(page).then(res=>{
            console.log('apifn',res)
            if(!this.initialized){
                this.initialized = true;
            }
            if(this.loading === false)return; // 表示已经有地方提前结束了loading，此时不需要作任何处理。
            this.loading = false;
            if(res.data  ){
                const list = res.data.data;
                const meta = res.data.meta;
                this.current_page = meta.current_page;
                this.prev_page = meta.prev_page || 0;
                this.next_page = meta.next_page;
                this.total_page = meta.total_page;

                console.log('splice', this.informations.length,this._limit)
                if(this.informations.length >this.maxLength && this._limit ){

                    this.informations.splice(0,this.informations.length- list.length);
                    this.informations = observable(Array.from(this.informations))
                    this.startPage =this.prev_page;
                }
                this.pushInfo(list);
            }
            return res;
        }).catch(()=>{
            console.log('loading err')
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

    @action
    reload (){
        this.reset();
        this.loadData()
    }
}