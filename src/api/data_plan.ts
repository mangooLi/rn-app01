



const data:DataPlan ={
    
      data_hero_informations : [ // 数据侠专栏 3篇
        {
          id: 1,
          title: "title",
          summary: "简介",
          date: "2017-09-08T18:17:50.762+08:00", // 显示时间
          thumbnail_url: "http://cf.dtcj.com/FuArPuItHedAxRSwMOSblFOmqA7i",
          author: "作者",
          topic: {
            id: 1,
            name: "子栏目名称",
          },
          tags: [
            {
              id: 1,
              name: "标签名称1",
            },
            {
              id: 2,
              name: "标签名称2",
            }
          ],
        },
        {
            id: 2,
            title: "title2",
            summary: "简介",
            date: "2017-09-08T18:17:50.762+08:00", // 显示时间
            thumbnail_url: "http://cf.dtcj.com/FuArPuItHedAxRSwMOSblFOmqA7i",
            author: "作者",
            topic: {
              id: 1,
              name: "子栏目名称",
            },
            tags: [
              {
                id: 1,
                name: "标签名称1",
              },
              {
                id: 2,
                name: "标签名称2",
              }
            ],
          },
          {
            id: 1,
            title: "title",
            summary: "简介",
            date: "2017-09-08T18:17:50.762+08:00", // 显示时间
            thumbnail_url: "http://cf.dtcj.com/FuArPuItHedAxRSwMOSblFOmqA7i",
            author: "作者",
            topic: {
              id: 1,
              name: "子栏目名称",
            },
            tags: [
              {
                id: 1,
                name: "标签名称1",
              },
              {
                id: 2,
                name: "标签名称2",
              }
            ],
          }
      ],
      data_lab_informations: [ // 数据侠实验室(活动) 2篇
        {
          id: 1,
          title: "title",
          summary: "简介",
          category: "for_register", // 活动类型 for_register:活动报名 for_review:精彩回顾
          date: "2017-09-08T18:17:50.762+08:00", // 显示时间
          place: "上海",
          place_pinyin: "Shanghai",
          address: "详细地址",
          start_at: "2017-09-08T18:17:50.762+08:00", // 活动开始时间
          end_at: "2017-09-08T18:17:50.762+08:00", // 活动结束时间
          thumbnail_url: "http://cf.dtcj.com/FuArPuItHedAxRSwMOSblFOmqA7i",
          author: "作者",
          state: 'to_begin', // to_begin living ended
          tags: [
            {
              id: 1,
              name: "标签名称1",
            },
            {
              id: 2,
              name: "标签名称2",
            }
          ],
        }
      ],
      data_fifty_informations: [ // 数据科学50人 3篇
        {
          id: 1,
          title: "title",
          summary: "简介",
          date: "2017-09-08T18:17:50.762+08:00", // 显示时间
          thumbnail_url: "http://cf.dtcj.com/FuArPuItHedAxRSwMOSblFOmqA7i",
          author: "作者",
          data_scientist_name: "姓名",
          data_scientist_avatar_url: "头像",
          data_scientist_app_avatar_url: "头像(App)",
          data_scientist_introduction: "简介",
          tags: [
            {
              id: 1,
              name: "标签名称1",
            },
            {
              id: 2,
              name: "标签名称2",
            }
          ],
        }
      ],
    
  }



export const getDataPlanList =():Promise<DataPlan> =>{
    return Promise.resolve(data);
}






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
    data_hero_informations:DataHeroInformation[];
    data_lab_informations:DataLabInformation[];
    data_fifty_informations:DataFiftyInformation[];

}