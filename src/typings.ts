/**
 * 用户信息
 */
interface AcountInfo {
    id: number,
    nickname: string,
    phone: string,
    avatar_url: string,
    created_at: string,
    updated_at: string,
    token: string,
}


/**
 * 评论详情
 */
interface CommentItem{
    id: 1,
    commentable_type: string,
    commentable_id: 1, // 资讯 information id
    user_nickname: string,
    user_avatar_url: string,
    content: string,
    created_at: string,
    like_items_count: 1, // 点赞数
    has_like: false, // 是否点赞过
}

/**
 * 视频
 */
interface Video{

    id: number,
    title: string,
    duration: number, //视频时长 单位: 秒
    thumbnail_url: string, //封面图
    source_url: string, //mp4地址
    high_source_url: string, //较高质量视频m3u8地址
    low_source_url: string, //较低质量视频m3u8地址

}

/**
 * 分页信息
 */
interface Meta{
    current_page: number,
    next_page: 2,
    prev_page: null,
    total_page: 2,
    total_count: 30
  }


  /**
 * 分页查询参数
 */
interface PageQuery{
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
interface DataDiscoverInformations{
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
interface DataFiftyInformations{
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
interface DataHeroInformations{
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


interface InformationCardItem{
  
    id: number,
    // (:id, :category, :title, :content, :link_title, :link_url, :images) }
    category: string, // 卡片分类 text_card: 普通卡片  image_card: 图片卡片
    title: string,
    content: string, // 普通卡片 使用
    link_title: string,
    link_url: string,
    images: string[] // 图片卡片 使用
   
}


/**
 * 数据侠实验室(活动)详情
 */
interface DataLabInformations{
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
    information_cards: InformationCardItem[] // 精彩回顾 使用
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
interface ReportProductsInformation{
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


interface RecommendationDetail{
  
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

interface Recommendations{
  data:RecommendationDetail[],
  meta:Meta
}


interface DataDiscoverTopic{
    id: number,
    name: string,
    introduction: string,
    logo_url: string,
    web_logo_url: string,
    thumbnail_url: string,
    tag_ids: [1, 2],
    tags: [
    {
        id: number,
        name: string,
    }
    ],
}


interface DataPlan{
    data:{
      data_hero_informations:DataHeroItem[];
      data_lab_informations:DataLabItem[];
      data_fifty_informations:DataFiftyItem[];
    }

}

/**
 * 数据侠专栏子栏目
 */
interface DataHeroTopic{

    id: number,
    name: string,
    introduction: string,
    logo_url: string,
    informations_count: number, // 文章数量

}


enum InformationFlowType{
    /**
     * 数据洞察
     */
    data_discover_information= 'data_discover_information',
    /**
     * 数据侠实验室
     */
    data_lab_information='data_lab_information' ,
    /**
     * 数据侠专栏
     */
    data_hero_information='data_hero_information',
    /**
     * 数据科学50人
     */
    data_fifty_information='data_fifty_information'

}

/**
 * 数据洞察
 */
interface DataDiscoverItem{

    _type:InformationFlowType,
    id: number,
    title: string,
    summary: string,
    date: string
    thumbnail_url: string,
    author: string,
      topic: [{
        id: number,
        name: string,
      }],
    tags: [
      {
        id: number,
        name: string,
      }
    ],
}

/**
 * 数据侠实验室
 */
interface DataLabItem{
    _type:InformationFlowType,
    id: 1,
    title: string,
    summary: string,
    thumbnail_url: string,
    category: string, // 活动类型 for_register:活动报名 for_review:精彩回顾
    place: string,
    place_pinyin: string,
    address:string,
    date: string, // 显示时间
    start_at: string, // 活动开始时间
    end_at: string, // 活动结束时间
    author: string
    state: string, // to_begin living ended
    tags: [
        {
        id: number,
        name: string,
        }
        
    ]
}



/**
 * 数据侠专栏
 */
interface DataHeroItem{
    id: number,
    _type: InformationFlowType, 
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

/**
 * 数据科学50人
 */
interface DataFiftyItem{
    id: 1,
    _type: InformationFlowType, 
    title: string,
    summary: string,
    date: string, 
    thumbnail_url: string,
    author: string,
    data_scientist_name: string,
    data_scientist_avatar_url: string,
    data_scientist_app_avatar_url: string,
    data_scientist_introduction: string,
    tags: [
      {
        id: 1,
        name: string,
      }
    ],
}

interface InformationFlow{
    data:DataDiscoverItem[]|DataLabItem[]|DataHeroItem[]|DataFiftyItem[],
    meta:Meta
}


/**
 * 
 */
interface BannerItem{
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


interface ReportProductItem{
    id: number,
    title: string,
    summary: string,
    date: string
    thumbnail_url: string,
    price_category: string,
    tags: [
      {
        id: number,
        name: string,
      }
    ],
  
    original_price: string,
    enable_discount: boolean,
    discount_price: string,
    report_images_count: number
   
    
}

// 搜索结果
interface SearchInformation{
    id: number,
    _type: string, // 资讯类型  data_discover_information:数据洞察 data_fifty_information:数据科学50人 data_hero_information:数据侠专栏 data_lab_information:数据侠实验室 data_visualization_information:数据可视化
    title: string,
    summary: string,
    date: string,
    thumbnail_url: string,
    tags: [
    {
        id: number,
        name: string,
    }]
}

interface DataDiscoverItem{

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

interface BannerItem{

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

interface DataLabItem{
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


interface DataVisualizationItem{
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
interface ReportProductItem{
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

interface HomePageAll{

        banners:BannerItem[],
        data_discover:DataDiscoverItem[],
        data_lab:DataLabItem[],
        data_hero:DataHeroItem[],
        data_visualization:DataVisualizationItem[],
        report_product:ReportProductItem[]

}