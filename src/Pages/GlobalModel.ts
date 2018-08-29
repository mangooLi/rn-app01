

import {observable, action} from 'mobx';


class  GlobalModel {
    @observable 
    fold:boolean = false; // 是否折叠

    @action
    foldPage(){
        this.fold = true;
    }

    @action
    expandPage(){
        this.fold = false;
    }

    @observable
    user:AcountInfo

    @action 
    setUser (user:AcountInfo){
        this.user = user;
    }
}

export default new GlobalModel()