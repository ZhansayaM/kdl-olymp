import { IHttpClient } from 'services/common/HttpClient'
import { IAbout } from 'types/DTO/About'

export interface IAboutRepository {
  getAbout(): Promise<any>
}

export default class About implements IAboutRepository {
  constructor(private $http: IHttpClient) {}

  async getAbout(): Promise<IAbout> {
    const res = await this.$http.get('/about')
    return res.data
  }
}
