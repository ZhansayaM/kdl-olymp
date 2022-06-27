import { IHttpClient } from 'services/common/HttpClient'
import { ISales } from 'types/DTO/Sales'

export interface ISalesRepository {
  getSales(): Promise<ISales>
}

export default class Sales implements ISalesRepository {
  constructor(private $http: IHttpClient) {}
  async getSales(): Promise<ISales> {
    const res = await this.$http.get('/offer')
    return res.data
  }
}
