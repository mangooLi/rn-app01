


import fetch from './request';



import {DataHeroInformations,DataDiscoverInformations,DataFiftyInformations,DataLabInformations,Recommendations} from './common'



/**
 * 获取文章咨询详情
 */
export function getInformaatinDetail(id:number){
    return fetch<{data:DataHeroInformations|DataDiscoverInformations|DataFiftyInformations|DataLabInformations}>({url:`api/v1/informations/${id}`})
}


/**
 * 获取文章资讯推荐
 * @param id  文章id
 * @param limit  推荐数量
 */
export function getRecommendations(id:number|string, limit:number =4){
    return fetch<Recommendations>({url:`api/v1/informations/${id}/recommendations`,data:{limit}})
}