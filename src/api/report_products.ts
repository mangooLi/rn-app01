





import fetch from './request'



/**
 * 获取数据报告列表
 * @param page 分页参数
 */
export function getReportProducts (page:number =1){
    const data={
        price_category:'all',
        sort:'latest',
        page,per:20
    }

    return fetch<{data:ReportProductItem[],meta:Meta}>({url:'api/v1/report_products',data})
}


/**
 * 获取数据报告详情
 * @param id 数据报告id
 */
export function getReportProductsDetail(id:number){
    return fetch<{data:ReportProductsInformation}>({url:`api/v1/report_products/${id}`})
}