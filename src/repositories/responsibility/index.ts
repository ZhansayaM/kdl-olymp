import { IHttpClient } from 'services/common/HttpClient'
import { IResponsibility } from 'types/DTO/Responsibility'

export interface IResponsibilityRepository {
  getResponsibility(): Promise<any>
}

export default class Responsibility implements IResponsibilityRepository {
  constructor(private $http: IHttpClient) {}

  async getResponsibility(): Promise<IResponsibility> {
    const res = await this.$http.get('/responsibility')
    return res?.data
  }
}
