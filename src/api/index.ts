






// export * from './data_plan';
// export * from './HomePage';

export interface Meta{
    current_page: number,
    next_page: 2,
    prev_page: null,
    total_page: 2,
    total_count: 30
}

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

export * from './home';
export * from './information';