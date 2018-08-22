

import {observable, action} from 'mobx';


class  ListModel {
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
}

export default new ListModel()