

import {observable} from 'mobx';
import List from  '../../Common/List';
import {ReportProductItem,getMyReport} from '../../api';

export default class Model extends List<ReportProductItem> {


    apiFn(page:number){
        return getMyReport()
    }
}