



import fetch from './request';

import {DataHeroItem,DataLabItem,DataFiftyItem} from './home';
import {Meta} from './common'


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