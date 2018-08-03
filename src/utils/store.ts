


import {DataHeroTopic} from '../api';

class StorageService<T> {

    data:any;
    constructor (){
        this.data = {}
    }

    getItem=(key:string):T=>this.data[key]

    setItem=(key:string,value:T)=>{
        this.data[key] = value;
    }
    removeItem = (key:string)=>{
        delete this.data[key]
    }
}




export const DataHeroTopicStorage = new StorageService<DataHeroTopic[]>();



