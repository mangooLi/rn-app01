


import fetch from './request';




export enum InformationFlowType{
    /**
     * 数据洞察
     */
    data_discover_information= 'data_discover_information',
    /**
     * 数据侠实验室
     */
    data_lab_information='data_lab_information' ,
    /**
     * 数据侠专栏
     */
    data_hero_information='data_hero_information',
    /**
     * 数据科学50人
     */
    data_fifty_information='data_fifty_information'

}


/**
 * 获取文章咨询详情
 */
export function getInformaatinDetail(id:number,type?:string){
    return fetch<{data:DataHeroInformations|DataDiscoverInformations|DataFiftyInformations|DataLabInformations}>({url:`api/v1/${type?type:'information'}s/${id}`})
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
export function starInformation(information_id:number){
    const options = {
        url:'api/v1/mine/star_informations',
        method:'post',
        data:{
            information_id
        }
    }
    return fetch<{}>(options)
}


