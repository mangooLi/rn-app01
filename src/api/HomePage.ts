


// 这个文件暂时没啥用了。APP的首页调取的接口见home.ts
import fetch from './request';

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
export interface DataDiscoverItem{

        id: number,
        title: string,
        summary: string,
        date: string
        thumbnail_url: string,
        tags: [
          {
            id: number,
            name: string,
          }
        ],
}

export interface DataLabItem{
    id: 1,
        title: string,
        summary: string,
        thumbnail_url: string,
        category: string, // 活动类型 for_register:活动报名 for_review:精彩回顾
        place: string,
        place_pinyin: string,
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
export interface DataHeroItem{
    id: number,
    _type: string, // data_hero_information data_fifty_information
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

export interface DataVisualizationItem{
    id: 1,
        title: string,
        summary: string,
        date: string
        thumbnail_url: string,
        link_url: string, // 跳转链接
        tags: [
          {
            id: number,
            name: string,
          }
        ],
}

export interface ReportProductItem{
    id: number,
    title: string,
    summary: string,
    date: string
    thumbnail_url: string,
    price_category: string,
    original_price: string,
    enable_discount: boolean,
    discount_price: string,
    report_images_count: number
    tags: [
      {
        id: number,
        name: string,
      }
    ],
}

export interface HomePageAll{

        banners:BannerItem[],
        data_discover:DataDiscoverItem[],
        data_lab:DataLabItem[],
        data_hero:DataHeroItem[],
        data_visualization:DataVisualizationItem[],
        report_product:ReportProductItem[]

}


export function getHomePageAllList(){
    return fetch<HomePageAll>({url:'api/v1/home_page/all'})
}