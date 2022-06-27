import { IHttpClient } from 'services/common/HttpClient'
import { INews } from 'types/DTO/News'

export interface INewsRepository {
  getNews(slug: string): Promise<any>
  getAllNews(): Promise<any>
}

export default class News implements INewsRepository {
  constructor(private $http: IHttpClient) {}

  async getNews(slug: string): Promise<INews> {
    const res = await this.$http.get(`/news/${slug}`)
    return res.data
  }

  async getAllNews(): Promise<INews> {
    const res = await this.$http.get('/news')
    return res.data
  }
}
