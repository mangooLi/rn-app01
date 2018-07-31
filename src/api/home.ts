
import {Meta,PageQuery} from './common';
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
 * 数据洞察
 */
export interface DataDiscoverItem{

    _type:InformationFlowType,
    id: number,
    title: string,
    summary: string,
    date: string
    thumbnail_url: string,
    author: string,
      topic: [{
        id: number,
        name: string,
      }],
    tags: [
      {
        id: number,
        name: string,
      }
    ],
}
/**
 * 数据侠实验室
 */
export interface DataLabItem{
    _type:InformationFlowType,
    id: 1,
    title: string,
    summary: string,
    thumbnail_url: string,
    category: string, // 活动类型 for_register:活动报名 for_review:精彩回顾
    place: string,
    place_pinyin: string,
    address:string,
    date: string, // 显示时间
    start_at: string, // 活动开始时间
    end_at: string, // 活动结束时间
    state: string, // to_begin living ended
    tags: [
        {
        id: number,
        name: string,
        }
        
    ]
}
/**
 * 数据侠专栏
 */
export interface DataHeroItem{
    id: number,
    _type: InformationFlowType, 
    title: string,
    summary: string,
    date: string
    thumbnail_url: string,
    tags: [
        {
            id: number,
            name: string,
        }
    ]
}
/**
 * 数据科学50人
 */
export interface DataFiftyItem{
    id: 1,
    _type: InformationFlowType, 
    title: string,
    summary: string,
    date: string, 
    thumbnail_url: string,
    author: string,
    data_scientist_name: string,
    data_scientist_avatar_url: string,
    data_scientist_app_avatar_url: string,
    data_scientist_introduction: string,
    tags: [
      {
        id: 1,
        name: string,
      }
    ],
}

export interface InformationFlow{
    data:DataDiscoverItem[]|DataLabItem[]|DataHeroItem[]|DataFiftyItem[],
    meta:Meta
}

/**
 * 获取首页信息流
 * @param data 分页信息
 */
export function getInformationFlow(data?:PageQuery){
    return fetch<InformationFlow>({url:'api/v1/home_page/information_flow',data})
}


/**
 * 
 */
export interface BannerItem{
    id: number,
    title: string,
    prefix: string,
    summary: string,
    thumbnail_url: string,
    date: string,
    information_id: 1,
    information_type: string,
    information_link_url: string,
}
/**
 * 获取首页banners
 */
export function getBanners(){
    return fetch<{data:BannerItem[]}>({url:'api/v1/home_page/banners'})
}


export interface ReportProductItem{
    id: number,
    title: string,
    summary: string,
    date: string
    thumbnail_url: string,
    price_category: string,
    tags: [
      {
        id: number,
        name: string,
      }
    ],
}

/**
 * 首页随机报告3篇(For App)
 */
export function getRandomReportProduct(){
    return fetch<{data:ReportProductItem[]}>({url:'api/v1/home_page/random_report_product '})
}