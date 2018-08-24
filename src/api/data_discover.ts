
import fetch from './request';
/**
 * 获取 数据洞察子栏目列表
 */
export function getDataDiscoverTopic(){
    return fetch<{data:DataDiscoverTopic[]}>({url:'api/v1/data_discover_topics'})
}




enum SortType {
    latest='latest',
    hottest='hottest'
}


/**
 * 获取数据洞察列表
 * @param topic_id 子栏目ID 按子栏目筛选 （非子栏目的地方不传）
 * @param tags 标签ID数组 （app中不需要传）
 * @param sort 排序 latest: 最新排序 hottest: 最热排序 默认值: latest
 * @param page 分页数(默认值:1)
 * @param per 每页数量(默认值:20)
 */
export function getDataDiscoverInformations(topic_id:number|null,page:number=1){
    const data= topic_id?{
        topic_id,sort:SortType.latest,page,per:20
    }:{
        sort:SortType.latest,page,per:20
    }

    return fetch<{data:DataDiscoverItem[],meta:Meta}>({url:`api/v1/data_discover_informations`,data})
}


/**
 * 获取数据洞察详情
 * @param information_id 文章ID
 */
export function getDataDiscoverInformationDetail(information_id:number){
    return fetch<{data:DataDiscoverInformations}>({url:`api/v1/data_discover_informations/${information_id}`})
}