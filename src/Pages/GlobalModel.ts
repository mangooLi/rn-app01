

import {observable, action} from 'mobx';


class  GlobalModel {

    @observable
    user:AcountInfo

    @action 
    setUser (user:AcountInfo){
        this.user = user;
    }
}

export default new GlobalModel()