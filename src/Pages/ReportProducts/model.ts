


import {getReportProducts} from '../../api';
import List from '../../Common/List';

export default class ReportProductsModel extends List<ReportProductItem>{


    apiFn=(page:number)=>{
        return getReportProducts(page)
    }

    

}