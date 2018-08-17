
import {observable,action,set} from 'mobx';


export default class LoginModel {
    @observable account:string = '19951579217';
    @observable password:string = '123456';


    @action
    update (obj:any){
        set (this,obj);
    }

}