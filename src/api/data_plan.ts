



import fetch from './request';

import {DataHeroItem,DataLabItem,DataFiftyItem} from './home';
import {Meta, DataLabInformations} from './common'


// interface Tag{
//     id:number|string;
//     name:string;
// }
// export interface DataHeroItem{
//     id:string|number;
//     title:string;
//     summary:string;
//     date:Date|string;
//     thumbnail_url:string;
//     author:string;
//     topic:Tag;
//     tags:Tag[];
// }

// export interface DataLabItem{
//     id:string|number;
//     title:string;
//     summary:string;
//     category:string;
//     date:Date|string;
//     place:string;
//     place_pinyin:string;
//     address:string;
//     start_at:Date|string;
//     end_at:Date|string;
//     thumbnail_url:string;
//     author:string;
//     state:string;
//     tags:Tag[]
// }

// export interface DataFiftyItem{
//     id: number|string,
//     title: string,
//     summary: string,
//     date: Date|string;
//     thumbnail_url: string,
//     author: string,
//     data_scientist_name: string,
//     data_scientist_avatar_url: string,
//     data_scientist_app_avatar_url: string,
//     data_scientist_introduction: string,
//     tags: Tag[]
// }

export interface DataPlan{
    data:{
      data_hero_informations:DataHeroItem[];
      data_lab_informations:DataLabItem[];
      data_fifty_informations:DataFiftyItem[];
    }

}


/**
 * 获取数据侠计划首页列表
 */
export function getDataPlanList(){
  return fetch<DataPlan>({url:'api/v1/data_plan'})
}


/**
 * 获取数据科学50人列表
 */
export function getDataFiftyList (page:number){

  const options={
    url:'api/v1/data_fifty_informations',
    data:{
      page,
      sort:'latest'
    }
  }

  return fetch <{data:DataFiftyItem[],meta:Meta}>(options)
}


/**
 * 数据侠专栏子栏目
 */
export interface DataHeroTopic{

    id: number,
    name: string,
    introduction: string,
    logo_url: string,
    informations_count: number, // 文章数量

}

/**
 * 获取数据侠专栏子栏目列表
 */
export function getDataHeroTopics(){
  return fetch<{data:DataHeroTopic[]}>({url:'api/v1/data_hero_topics'})
}


/**
 * 获取数据侠专栏列表
 * @param topic_id 子栏目ID
 * @param pageToLoad 分页参数
 */
export function getDataHeroInformations(topic_id:number|null,page:number){
  let data:any = {sort:'latest',page,per:20}
  if(topic_id){
    data.topic_id = topic_id;
  }
  return fetch<{data:DataHeroItem[],meta:Meta}>({url:'api/v1/data_hero_informations',data})
}

/**
 * 数据侠实验室活动类型
 */
export enum DataLabItemCategory{
  // 全部
  all='all',
  // 活动报名
  for_register='for_register',
  // 精彩回顾
  for_review='for_review'
}

/**
 * 获取数据侠实验室列表
 * @param category 活动类型
 * @param page 分页参数
 */
export function getDataLabInformations(category:DataLabItemCategory,page:number){

    let data :any = {category,sort:'latest',page,per:20}

    return fetch<{data:DataLabItem[],meta:Meta}>({url:'api/v1/data_lab_informations',data})
}


/**
 * 获取数据侠实验室详情
 * @param id 活动id
 */
export function getDataLabInformationDetail(id:number){
  return fetch<{data:DataLabInformations}>({url:`api/v1/data_lab_informations/${id}`})
}