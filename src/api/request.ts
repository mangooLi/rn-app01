


// export const baseUrl='http://staging.dtcj.com/';

export const baseUrl = 'http://www.dtcj.com/'
export interface Options<T> {
  url: string;
  method?: string;
  headers?: any;
  data?: T;
  cache?:boolean
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

    let key;
    if(!options.cache){
        key = JSON.stringify(options);
        return storage.load({key}).then(ret=>{
          return ret;
        }).catch(e=>{
          return requestFromUrl(options)
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

      const ret = response.json();
      if(!options.cache){
        storage.save({key:JSON.stringify(options),data:ret,expires:1*60*3600*1000})
      }
      return ret;
    } else {
      const ret = response.text();
      if(!options.cache){
        storage.save({key:JSON.stringify(options),data:ret,expires:1*60*3600*1000})
      }
      return ret;
    }
  }).then(resp => {
    if(resp.error){
      throw {
        message:resp.error
      }
    }

    return {
      success: true,
      data: resp,
      message: null,
    }
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