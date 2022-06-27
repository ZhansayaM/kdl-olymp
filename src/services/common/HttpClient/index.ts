import { Context } from '@nuxt/types'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IHttpParams extends AxiosRequestConfig {}
export interface IHttpResponse extends AxiosResponse {}
export interface IHttpClient {
  get(url: string, params?: IHttpParams): Promise<IHttpResponse>
  post(url: string, params: IHttpParams): Promise<IHttpResponse>
  put(url: string, params: IHttpParams): Promise<IHttpResponse>
  delete(url: string, params: IHttpParams): Promise<IHttpResponse>
}

export default class HttpClient implements IHttpClient {
  constructor(private $http: Context['$axios']) {}

  async get(url: string, params?: IHttpParams) {
    try {
      return await this.$http.$get(url, params?.params)
    } catch (e) {
      console.log('GET ERROR', e)
    }
  }

  async post(url: string, params: IHttpParams) {
    try {
      return await this.$http.$post(url, params?.params)
    } catch (e) {
      console.log('POST ERROR', e)
    }
  }

  async put(url: string, params: IHttpParams) {
    try {
      return await this.$http.$put(url, params?.params)
    } catch (e) {
      console.log('PUT ERROR', e)
    }
  }

  async delete(url: string, params: IHttpParams) {
    try {
      return await this.$http.$delete(url, params?.params)
    } catch (e) {
      console.log('DELETE ERROR', e)
    }
  }
}
