




import {DataFiftyItem,getDataFiftyList} from '../../api';

import List from '../../Common/List';


export default class DataFiftyModel extends List<DataFiftyItem>{


    apiFn(pageToLoad:number){
        return getDataFiftyList(pageToLoad);
    }
}

