



import fetch from './request';


interface Tag{
    id:number|string;
    name:string;
}
export interface DataHeroInformation{
    id:string|number;
    title:string;
    summary:string;
    date:Date|string;
    thumbnail_url:string;
    author:string;
    topic:Tag;
    tags:Tag[];
}

export interface DataLabInformation{
    id:string|number;
    title:string;
    summary:string;
    category:string;
    date:Date|string;
    place:string;
    place_pinyin:string;
    address:string;
    start_at:Date|string;
    end_at:Date|string;
    thumbnail_url:string;
    author:string;
    state:string;
    tags:Tag[]
}

export interface DataFiftyInformation{
    id: number|string,
    title: string,
    summary: string,
    date: Date|string;
    thumbnail_url: string,
    author: string,
    data_scientist_name: string,
    data_scientist_avatar_url: string,
    data_scientist_app_avatar_url: string,
    data_scientist_introduction: string,
    tags: Tag[]
}

export interface DataPlan{
    data:{
      data_hero_informations:DataHeroInformation[];
      data_lab_informations:DataLabInformation[];
      data_fifty_informations:DataFiftyInformation[];
    }

}



export function getDataPlanList(){
  return fetch<DataPlan>({url:'api/v1/data_plan'})
}