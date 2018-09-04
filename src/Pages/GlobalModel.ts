

import {observable, action} from 'mobx';


class  GlobalModel {

    @observable
    user:AccountInfo

    @action 
    setUser (user:AccountInfo){
        this.user = user;
    }
}

export default new GlobalModel()