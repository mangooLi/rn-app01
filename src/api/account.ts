
import fetch  from './request'

import {InformationFlow} from './home';
import {CommentItem} from './comment';
import {Meta} from './common';
// 用户信息
export interface AcountInfo {
    id: number,
    nickname: string,
    phone: string,
    avatar_url: string,
    created_at: string,
    updated_at: string,
    token: string,
}


/**
 * 使用账号密码登陆
 * @param login 账号
 * @param password 密码
 */
export function login(login:string,password:string){
    const data = {
        login_type:'password',
        login,password
    }

    return fetch<{data:AcountInfo}>({url:'api/v1/sessions',method:'post',data})
}

/**
 * 获取短信验证码
 * @param phone 手机号码
 */
export function getSms (phone:string){
    return fetch <{data:{}}>({url:'api/v1/sms',method:'post',data:{phone}})
}



/**
 * 注册
 * @param phone 电话号码
 * @param code 手机验证码
 * @param password 密码
 */
export function register(phone:string,code:string,password:string){
    return fetch<{data:Account}>({url:'api/v1/user',method:'post',data:{phone,password,phone_code:code}})
}

/**
 * 获取收藏文章列表
 * @param page 
 */
export function getAccountCollection(page:number){
    return fetch<InformationFlow>({url:'api/v1/mine/star_informations',data:{page}})
}


/**
 * 删除收藏文章
 * @param information_ids 被删除收藏的id数组
 */
export function deleteStarInformation(information_ids:number[]){
    const options = {
        method:'post',
        url:'api/v1/mine/star_informations/batch_delete',
        data:{
            information_ids
        }
    }
    return fetch<{}>(options)
}


/**
 * 获取我的评论
 * @param page 
 */
export function   getAccountComment(page:number){
    return fetch<{data:CommentItem[],meta:Meta}>({url:'api/v1/mine/comments'})
}

/**
 * 
 * @param comment_id 评论ID
 */
export function toggleMineLike(comment_id:number){
    const options = {
        url:`api/v1/mine/comments/${comment_id}/toggle_like`,
        method:'post'
    }
    return fetch<{}>(options)
}