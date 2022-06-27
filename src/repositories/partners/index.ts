import { IHttpClient } from 'services/common/HttpClient'
import { IPartners } from 'types/DTO/Partners'

export interface IPartnersRepository {
  getPartners(): Promise<any>
}

export default class Partners implements IPartnersRepository {
  constructor(private $http: IHttpClient) {}

  async getPartners(): Promise<IPartners> {
    const res = await this.$http.get('/partners')
    return res?.data
  }
}
