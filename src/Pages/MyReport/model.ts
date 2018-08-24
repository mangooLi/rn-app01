


import List from  '../../Common/List';
import {getMyReport} from '../../api';

export default class Model extends List<ReportProductItem> {


    apiFn(page:number){
        return getMyReport()
    }
}