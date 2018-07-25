


import fetch from './request';



import {DataHeroInformations,DataDiscoverInformations,DataFiftyInformations,DataLabInformations} from './common'



/**
 * 获取文章咨询详情
 */
export function getInformaatinDetail(id:number){
    return fetch<{data:DataHeroInformations|DataDiscoverInformations|DataFiftyInformations|DataLabInformations}>({url:`api/v1/informations/${id}`})
}