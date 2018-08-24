

import {observable,action, toJS} from 'mobx'
import {getReportProducts} from '../../api';

export default class ReportProductsModel{


    @observable informations :ReportProductItem[] = []

    pageToLoad:number = 1;
    total_page:number = 1;
    loadding :boolean =false;


    @action
    addInfo (list:ReportProductItem[]){
        let pre=toJS(this.informations);
        pre = pre.concat(list);
        this.informations=observable(pre)
    }


    loadData(){
        if(this.loadding || (this.pageToLoad>this.total_page))return;
        this.loadding = true;
        getReportProducts(this.pageToLoad).then(res=>{
            this.loadding = false;
            if(res.data){
                this.addInfo(res.data.data)
                if(this.pageToLoad<=this.total_page){
                    this.pageToLoad=this.pageToLoad+1;
                }
            }
        }).catch(()=>{
            this.loadding = false;
        })
    }

}