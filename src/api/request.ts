


export const baseUrl='http://staging.dtcj.com/';
interface Options {
  url: string;
  method?: string;
  headers?: any;
  data?: any;
};

function addParamsToUrl(url: string, data: any) {
  let paramStr = url.indexOf('?') !== -1 ? '&' : '?';
  for (let key in data) {
    paramStr = `${paramStr}&${key}=${data[key]}`;
  }
  return `${url}${paramStr}`;
}

function getConfig(options: Options) {

    const config: any = {
      headers: {
        'content-type': 'application/json',
        // Authorization: `Basic ${token}`,
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

interface Response<T>{
    success:boolean;
    data:T|null;
    message:string|number|null;
}

export default function request<T>(options: Options):Promise<Response<T>> {
  

    const config=getConfig(options);
    return fetch(baseUrl+ config.url, config).then(response => {
      const contentType = response.headers.get('content-type') || '';
      if (contentType.indexOf('application/json;') !== -1) {
        return response.json();
      } else {
        return response.text();
      }
    }).then(resp => {
      console.log('resp',resp)
      return {
        success: true,
        data: resp,
        message: null,
      }
    }).catch(error => {
      return {
        success: false,
        data: null,
        message: error.message || error.stack || 'request error',
      };
    });

}