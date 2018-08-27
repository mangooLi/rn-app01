


import {observable,action,extendObservable, toJS } from 'mobx';
import {getReportProductsDetail , } from '../../api'


export default class ReportDetailModel {


    @observable id:number ;
    @observable pdf_url:string = '';
    @observable title:string = ''
    @observable page:number ;
    @observable percent :number = 0;

    @action
    init (id:number){
        this.id=id;
        this.loadData()
    }

    @action
    setProgress(percent:number){
        this.percent=percent;
        console.log(percent)
    }

    @action
    loadData(){
        getReportProductsDetail(this.id).then(res=>{
            //
            if(res.data){
                this.pdf_url=res.data.data.report.pdf_url;
                this.title=res.data.data.report.title;
                this.page=res.data.data.report.images_count;
            }
        })
    }
}