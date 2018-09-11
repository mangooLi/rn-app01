



import fetch from './request';



/**
 * 获取文章评论
 * @param information_id 文章id
 * @param pageToLoad 分页
 */
export function getInformationComments(information_id:number, pageToLoad:number=1){
    return fetch<{data:CommentItem,meta:Meta}>({url:`api/v1/informations/${information_id}/comments`,data:{page:pageToLoad,per:10},nocache:true})
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
        data:{content},
        nocache:true
    }
    return fetch<{data:CommentItem}>(options)
}


/**
 * 点赞 or 取消 评论
 * @param information_id 文章ID
 * @param comment_id 评论ID
 */
export function toogleCommentLike(information_id:number,comment_id:number){
    const options={
        url:`api/v1/informations/${information_id}/comments/${comment_id}/toggle_like`,
        method:'post',
        nocache:true
    }
    return fetch<{data:CommentItem}>(options)
}