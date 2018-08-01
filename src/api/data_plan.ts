



import fetch from './request';

import {DataHeroItem,DataLabItem,DataFiftyItem} from './home'


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



export function getDataPlanList(){
  return fetch<DataPlan>({url:'api/v1/data_plan'})
}