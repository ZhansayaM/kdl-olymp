import { IHttpClient } from 'services/common/HttpClient'
import { IHandbooks } from 'types/DTO/Handbooks'

export interface IHandbooksRepository {
  getHandbooks(): Promise<any>
}

export default class Handbooks implements IHandbooksRepository {
  constructor(private $http: IHttpClient) {}

  async getHandbooks(): Promise<IHandbooks> {
    const res = await this.$http.get('/handbooks')
    return res?.data
  }
}
