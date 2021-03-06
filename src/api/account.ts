
import fetch  from './request'



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

    return fetch<{data:AccountInfo}>({url:'api/v1/sessions',method:'post',data,nocache:true})
}

/**
 * 获取短信验证码
 * @param phone 手机号码
 */
export function getSms (phone:string){
    return fetch <{data:{}}>({url:'api/v1/sms',method:'post',data:{phone},nocache:true})
}



/**
 * 注册
 * @param phone 电话号码
 * @param code 手机验证码
 * @param password 密码
 */
export function register(phone:string,code:string,password:string){
    return fetch<{data:Account}>({url:'api/v1/user',method:'post',data:{phone,password,phone_code:code,nocache:true}})
}

/**
 * 获取收藏文章列表
 * @param page 
 */
export function getAccountCollection(page:number){
    return fetch<InformationFlow>({url:'api/v1/mine/star_informations',data:{page},nocache:true})
}


/**
 * 删除收藏文章
 * @param information_ids 被删除收藏的id数组
 */
export function deleteStarInformations(information_ids:number[]){
    const options = {
        method:'post',
        url:'api/v1/mine/star_informations/batch_delete',
        data:{
            information_ids
        },
        nocache:true
    }
    return fetch<{}>(options)
}


/**
 * 获取我的评论
 * @param page 
 */
export function   getAccountComment(page:number){
    return fetch<{data:CommentItem[],meta:Meta}>({url:'api/v1/mine/comments',nocache:true})
}

/**
 * 
 * @param comment_id 评论ID
 */
export function toggleMineLike(comment_id:number){
    const options = {
        url:`api/v1/mine/comments/${comment_id}/toggle_like`,
        method:'post',
        nocache:true
    }
    return fetch<{data:CommentItem}>(options)
}

/**
 * 批量删除评论
 * @param comment_ids 评论ID数组
 */
export function deleteMineComment (comment_ids:number[]){
    const options = {
        url:'api/v1/mine/comments/batch_delete',
        method:'post',
        data:{comment_ids},
        nocache:true
    }
    return fetch<{}>(options)
}

/**
 * 修改用户信息
 * @param nickname 用户名
 * @param avatar_url 头像路径
 */
export function modifyUserInfo(nickname?:string,avatar_url?:string){
    const options = {
        method:'put',
        url:'api/v1/user',
        data:{user:{nickname,avatar_url}},
        nocache:true
    }

    return fetch<{data:AccountInfo}>(options)
}



/**
 * 更新密码
 * @param password 原密码
 * @param new_password 新密码
 */
export function updatePassword(password:string,new_password:string){
    const options ={
        method:'post',
        url:'api/v1/user/update_password',
        data:{
            user:{
                password,new_password
            }
        },
        nocache:true
    }
    return fetch<{data:AccountInfo}>(options)
}





/**
 * 获取我的报告
 */
export function getMyReport (){
    return fetch<{data:ReportProductItem[],meta:Meta}>({url:'api/v1/mine/products/report',nocache:true})
}






/**
 * 
 * @param content 反馈内容
 * @param username 用户名
 */
export function feedback(content:string,username:string){
    const options = {
        url:'api/v1/global_feedbacks',
        method:'post',
        data:{
            content,email:username
        },
        nocache:true
    }
    return fetch<{data:Feedback}>(options)
}



export function resetPassword (phone:string,phone_code:string,password:string){
    const options = {
        url:'api/v1/user/reset_password',
        method:'post',
        data:{user:{phone,phone_code,password}}
    };

    return fetch<{data:Account}>(options)
}