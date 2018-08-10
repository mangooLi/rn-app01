

import {observable,action} from 'mobx';


class HomeModel {
    @observable outScroll:boolean = true;

    @action 
    enableOutScroll(enable:boolean){
        this.outScroll = enable;
    }
}


export default new HomeModel()