
import {observable,action,extendObservable, toJS } from 'mobx';

import {getInformationFlow,getBanners,getRandomReportProduct} from '../../api';
import List from '../../Common/List';

import { noop } from '../../utils';

export default class AllPageModel extends List<DataDiscoverItem|DataLabItem|DataHeroItem|DataFiftyItem>{




    @observable topics:DataDiscoverTopic[] = [];

    apiFn = (page:number)=>{
        return getInformationFlow({page,per:20})
    }
    @observable
    banners:BannerItem[] =[];
    @observable 
    report_product:ReportProductItem[]=[];


    @action
    init (){
        Promise.all([this.loadData(),getBanners(),getRandomReportProduct()]).then(values=>{
            this.loading = false;
            this.netError = false;
            // handle get banner
            if(values[1].data){
                // this.setState({banners:(values[1].data as {data:BannerItem[]}).data})
                this.banners = (values[1].data as {data:BannerItem[]}).data
            }

            // handle getRandomReportProduct
            if(values[2].data){
                // this.setState({report_product:(values[2].data as {data:ReportProductItem[]}).data})
                this.report_product = (values[2].data as {data:ReportProductItem[]}).data
            }
        }).catch(()=>{
            this.loading = false;
            this.netError = true;
        })
    }

    
}