import {AxiosRequestHeaders, Method, AxiosError} from 'axios';
import queryString from 'query-string';
import api from '../Services/Axios';
const buildURL = (url: string, query?: string | object) => {
    let _url = url;
    if (query) {
        _url += /\?/.test(url) ? '&' : '?';
        if (typeof query === 'object') {
            _url += queryString.stringify(query);
        } else {
            _url += query;
        }
    }
    return _url;
};

type MethodLowerCase =
  | 'get'
  | 'delete'
  | 'head'
  | 'options'
  | 'post'
  | 'put'
  | 'patch';

export const Request = async ({
    method = 'get',
    url,
    query,
    params,
    success,
    failure,
    headers,
}: {
  method?: MethodLowerCase;
  url: string;
  query?: string | object;
  params?: Record<string, string | number>;
  success?: (data: any) => void;
  failure?: ({message}: {message: string}) => void;
  headers?: AxiosRequestHeaders;
}) => {
    const axiosMethod = api[method];

    try {
        const result =
      method === 'get'
          ? await axiosMethod(buildURL(url, query), {headers})
          : await axiosMethod(buildURL(url, query), params, {headers});
        if (result.status === 200 || result.status === 201) {
            success?.(result.data);
            return result;
        }
        throw result;
    } catch (error: any) {
        failure?.({
            message: error?.message,
        });
    }
};
