export interface Video{

    id: number,
    title: string,
    duration: number, //视频时长 单位: 秒
    thumbnail_url: string, //封面图
    source_url: string, //mp4地址
    high_source_url: string, //较高质量视频m3u8地址
    low_source_url: string, //较低质量视频m3u8地址

}

export interface Meta{
  current_page: number,
  next_page: 2,
  prev_page: null,
  total_page: 2,
  total_count: 30
}
/**
 * 分页查询参数
 */
export interface PageQuery{
  /**
   * 分页数(默认值:1)
   */
  page:number,
  /**
   * 每页数量(默认值:20)
   */
  per:number
}


/**
 * 数据洞察详情
 */
export interface DataDiscoverInformations{
    id: number,
    _type: string,
    title: string,
    summary: string,
    date: string, // 显示时间
    thumbnail_url: string,
    author: string,
    content: string,
    has_star: false, // 是否收藏
    comments_count: number, // 评论数量
    share_url: string, // 分享链接
    topic: {
      id: number,
      name: string,
    },
    tags: [
      {
        id: number,
        name: string,
      }
    ],
    video: Video
}

/**
 * 数据科学50人详情
 */
export interface DataFiftyInformations{
    id: number,
    _type: string,
    title: string,
    summary: string,
    date: string, // 显示时间
    thumbnail_url: string,
    author: string,
    data_scientist_name: string,
    data_scientist_avatar_url: string,
    data_scientist_app_avatar_url: string,
    data_scientist_introduction: string,
    content: string,
    has_star: false, // 是否收藏
    comments_count: number, // 评论数量
    share_url: string, // 分享链接
    tags: [
      {
        id: number,
        name: string,
      }
    ],
    video: Video
}

/**
 * 数据侠专栏文章详情
 */
export interface DataHeroInformations{
    id: number,
    _type: string,
    title: string,
    summary: string,
    date: string, // 显示时间
    thumbnail_url: string,
    author: string,
    content: string,
    has_star: false, // 是否收藏
    comments_count: number, // 评论数量
    share_url: string, // 分享链接
    topic: {
      id: number,
      name: string,
    },
    tags: [
      {
        id: number,
        name: string,
      }
    ],
    video: Video
}

/**
 * 数据侠实验室(活动)详情
 */
export interface DataLabInformations{
    id: number,
    _type: string,
    title: string,
    summary: string,
    category: string, // 活动类型 for_register: 活动报名 for_review: 精彩回顾
    date: string, // 显示时间
    place: string,
    place_pinyin: string,
    address: string,
    start_at: string, // 活动开始时间
    end_at: string, // 活动结束时间
    thumbnail_url: string,
    author: string,
    content: string, // 活动报名 使用
    has_star: false, // 是否收藏
    comments_count: number, // 评论数量
    share_url: string, // 分享链接
    state: 'to_begin', // to_begin living ended
    information_cards: [ // 精彩回顾 使用
      {
        id: number,
        // (:id, :category, :title, :content, :link_title, :link_url, :images) }
        category: string, // 卡片分类 text_card: 普通卡片  image_card: 图片卡片
        title: string,
        content: string, // 普通卡片 使用
        link_title: string,
        link_url: string,
        images: string[] // 图片卡片 使用
       }
    ]
    tags: [
      {
        id: number,
        name: string,
      }
    ],
    video: Video
}

/**
 * 数据报告详情
 */
export interface ReportProductsInformation{
    id: number,
    title: string,
    thumbnail_url: string,
    description: string,
    date: string,
    content: string,
    price_category: string,
    original_price: string,
    enable_discount: false,
    discount_price: null,
    has_permission: false, // 是否有权限
    report_images_count: number, // 页数
    tags: [
      {
        id: number,
        name: string
      }
    ],
    report: {
      id: number,
      title: string,
      images_count: number,
      watermark_image_urls: [string], // 报告图片
      pdf_url: string, // PDF地址
    }
    video: Video// 详情页视频
    content_video: Video // 介绍页视频
      
}

export interface RecommendationDetail{
  
    id: number,
    _type: string, // 文章资讯类型  data_discover_information:数据洞察 data_fifty_information:数据科学50人 data_hero_information:数据侠专栏 data_lab_information:数据侠实验室 data_visualization_information:数据可视化
    title: string,
    summary: string,
    date: string,
    thumbnail_url: string,
    tags: [
      {
        id: number,
        name: string,
      }
    ],
}

export interface Recommendations{
  data:RecommendationDetail[],
  meta:Meta
}