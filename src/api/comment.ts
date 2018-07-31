



import fetch from './request';
import {Meta} from './common';
export interface CommentItem{
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
 * 获取文章评论
 * @param information_id 文章id
 * @param pageToLoad 分页
 */
export function getInformationComments(information_id:number, pageToLoad:number=1){
    return fetch<{data:CommentItem,meta:Meta}>({url:`api/v1/informations/${information_id}/comments`,data:{page:pageToLoad,per:10}})
}


/**
 * 创建评论
 * @param information_id 文章id
 * @param content 评论内容
 */
export function addCommentToInformation(information_id:number,content:string){
    const options ={
        url:`api/v1/informations/${information_id}/comments`,
        method:'post',
        data:{content}
    }
    return fetch<{data:CommentItem}>(options)
}

export function toogleCommentLike(information_id:number,comment_id:number){
    const options={
        url:`api/v1/informations/${information_id}/comments/${comment_id}/toggle_like`,
        method:'post'
    }
    return fetch<{data:CommentItem}>(options)
}