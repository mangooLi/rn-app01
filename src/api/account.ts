
import fetch  from './request'



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
