


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


/**
 * 收藏文章
 * @param information_id 文章ID
 */
export function startInformation(information_id:number){
    const options = {
        url:'api/v1/mine/star_informations',
        method:'post',
        data:{
            information_id
        }
    }
    return fetch<{}>(options)
}