



import fetch from './request';



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