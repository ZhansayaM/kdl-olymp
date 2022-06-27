import { IHttpClient } from 'services/common/HttpClient'
import { IPages } from 'types/DTO/Pages'

export interface IPagesRepository {
  getPages(slug: string): Promise<any>
  getAllPages(): Promise<any>
}

export default class Pages implements IPagesRepository {
  constructor(private $http: IHttpClient) {}

  async getPages(slug: string): Promise<IPages> {
    const res = await this.$http.get(`/pages/${slug}`)
    return res.data
  }

  async getAllPages(): Promise<IPages> {
    const res = await this.$http.get('/pages')
    return res.data
  }
}
