import { IHttpClient } from 'services/common/HttpClient'
import { IPromocode } from 'types/DTO/Promocode'

export interface IPromocodeRepository {
  getPromocode(): Promise<any>
}

export default class Promocode implements IPromocodeRepository {
  constructor(private $http: IHttpClient) {}

  async getPromocode(): Promise<IPromocode> {
    const res = await this.$http.get('/promocode')
    return res?.data
  }
}
