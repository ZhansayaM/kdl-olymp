import { IHttpClient } from 'services/common/HttpClient'
import { IDiscountSystem } from 'types/DTO/DiscountSystem'

export interface IDiscountSystemRepository {
  getDiscountSystem(): Promise<any>
}

export default class DiscountSystem implements IDiscountSystemRepository {
  constructor(private $http: IHttpClient) {}

  async getDiscountSystem(): Promise<IDiscountSystem> {
    const res = await this.$http.get('/discount-system')
    return res.data
  }
}
