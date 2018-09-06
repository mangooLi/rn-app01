


import {observable,action} from 'mobx';

import {Response} from '../api/request';
// import uuid from 'uuid'


export default abstract class  List<T> {
    

    @observable informations:T[] = [];
    @observable netError:boolean = false;
    @observable initialized:boolean = false;
    pageToLoad:number = 1;
    total_page:number = 1;
    loading :boolean = false;

    // preStack:string[] = [];

    // sufStack:string[] = [];

    /**
     * 存入storage
     * @param data 需要存入的数据
     * @param pre 存入preStack(true) 或者sufStack(false)
     */
    // cache(data:any,pre:boolean){
    //     const key = uuid.v1();
    //     if(pre){
    //         this.preStack.push(key)
    //     }else{
    //         this.sufStack.push(key)
    //     }

    //     storage.save({
    //         key,
    //         data,
    //         expires:null
    //     });

    // }

    /**
     * 从cache里拿数据
     * @param pre 从preStack(true) 或者sufStack(false) 取数据
     */
    // @action
    // loadCache(pre:boolean){
    //     if(pre){
    //         const key = this.preStack.shift();
            
    //         key &&  storage.load({key}).then(data=>{


    //             console.log('data',data)
    //             this.addInofToPre(data)
    //         })
    //     }else{
    //         const key = this.sufStack.shift();

    //         key && storage.load({key}).then(data=>{
    //             this.addInfo(data)
    //         })
    //     }
    // }



    abstract  apiFn(pageToLoad:number) :Promise<Response<{data:T[],meta:Meta}>>

    @action
    init (id?:number,name?:string,type?:string){
        this.loadData()
    }


    @action
    addInfo (list:T[]){
        // let pre =this.informations;
        // pre = pre.concat(list);
        // this.informations = observable(pre)

        this.informations = this.informations.concat(list);
        // if(this.informations.length > 20){
        //     const pre = this.informations.splice(0,20);
        //     this.cache(pre,true)
        // }
    }

    // @action
    // addInofToPre(list:T[]){
    //     this.informations = list.concat(this.informations);
    //     const length = this.informations.length;
    //     if(length >20){
    //         const suf = this.informations.splice(length-20,20);
    //         this.cache(suf,false)
    //     }
    // }

    @action 
    loadData(){
        if( (this.pageToLoad>this.total_page)|| this.loading )return;

        // if(this.sufStack.length>0){
        //     this.loadCache(false);
        //     return;
        // }
        

        this.loading = true;
        this.netError = false;
        this.apiFn(this.pageToLoad).then(res=>{
            if(!this.initialized){
                this.initialized = true;
            }
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
        this.initialized = false;
    }


    // @action 
    // loadPreData(){
    //     if(this.preStack.length>0){
    //         this.loadCache(true);
    //     }
    // }


}