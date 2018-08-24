


// 这个文件暂时没啥用了。APP的首页调取的接口见home.ts
import fetch from './request';



export function getHomePageAllList(){
    return fetch<HomePageAll>({url:'api/v1/home_page/all'})
}