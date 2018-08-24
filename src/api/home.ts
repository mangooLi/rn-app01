

import fetch from './request';


/**
 * 获取首页信息流
 * @param data 分页信息
 */
export function getInformationFlow(data?:PageQuery){
    return fetch<InformationFlow>({url:'api/v1/home_page/information_flow',data})
}



/**
 * 获取首页banners
 */
export function getBanners(){
    return fetch<{data:BannerItem[]}>({url:'api/v1/home_page/banners'})
}



/**
 * 首页随机报告3篇(For App)
 */
export function getRandomReportProduct(){
    return fetch<{data:ReportProductItem[]}>({url:'api/v1/home_page/random_report_product '})
}




export function getSearchInformations (query:string,page:number){
    const data:any ={
        platform:'app',query,page,per:10
    }

    return fetch<{data:SearchInformation[],meta:Meta}>({url:'api/v1/search/information',data})
}   