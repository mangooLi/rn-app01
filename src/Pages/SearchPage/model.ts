


import {observable,action} from 'mobx';
import List from '../../Common/List';

import {getSearchInformations} from '../../api';

export default class SearchModel extends List<SearchInformation> {

    searchChanged:boolean = false;

    apiFn(page:number){
        return getSearchInformations(this.search,page)
    }

    // 搜索信息
    @observable search :string = '';

    @action
    changeSearch(text:string){
        this.search = text;
        //
        
    }


}