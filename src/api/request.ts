


// export const baseUrl='http://staging.dtcj.com/';

export const baseUrl = 'http://www.dtcj.com/'
export interface Options<T> {
  url: string;
  method?: string;
  headers?: any;
  data?: T;
  nocache?:boolean
};

function addParamsToUrl(url: string, data: any) {
  let linkStr = url.indexOf('?') !== -1 ? '&' : '?';

  let  paramStr = Object.keys(data).map(key=>`${key}=${data[key]}`).join('&')


  return `${url}${linkStr}${paramStr}`;
}

function getConfig(options: Options<any>) {

    
    const config: any = {
      headers: {
        'content-type': 'application/json',
        // 'Accept': 'application/json',
        Authorization: global.token,
        ...options.headers,
      },
      method: options.method || 'GET',
    };
    if (config.method !== 'GET' && config.method !== 'DELETE') {
      config.body = JSON.stringify(options.data || {});
    }
    if (config.method === 'GET' && options.data) {
      config.url = addParamsToUrl(options.url, options.data);
    } else {
      config.url = options.url;
    }
    return config;

}

export interface Response<T>{
    success:boolean;
    data:T|null;
    message:string|number|null;
}


export default function request<T>(options: Options<any>):Promise<Response<T>> {

    let key:string;
    if(!options.nocache){
        key = JSON.stringify(options).replace(/_/g,'');;
        return storage.load({key}).then(ret=>{
          return Promise.resolve(JSON.parse(ret));
        }).catch(()=>{

          return Promise.resolve(requestFromUrl(options)) 
        })
    }else{
      return requestFromUrl(options)
    }

}


function requestFromUrl<T>(options: Options<any>):Promise<Response<T>> {

  const config=getConfig(options);
  return fetch(baseUrl+ config.url, config).then(response => {
    const contentType = response.headers.get('content-type') || '';
   

    if (contentType.indexOf('application/json;') !== -1) {
      return response.json();
    } else {
      return response.text();
    }
  }).then(resp => {
    if(resp.error){
      throw {
        message:resp.error
      }
    }
    const ret = {
      success: true,
      data: resp,
      message: null,
    }
    const key = JSON.stringify(options).replace(/_/g,'');

    if(!options.nocache){
        storage.save({key,data:ret,expires:1*3600*1000})
    }


    return ret;
  })
  .catch(error => {

    // return  {
    //   success: false,
    //   data: null,
    //   message: error.message || error.stack || 'request error',
    // }
    console.log('error')
    console.log(error.message || error.stack)
    throw error;
  });

}