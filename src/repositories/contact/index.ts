import { IHttpClient } from 'services/common/HttpClient'
import { IContact } from 'types/DTO/Contact'

export interface IContactRepository {
  getContact(): Promise<any>
}

export default class Contact implements IContactRepository {
  constructor(private $http: IHttpClient) {}

  async getContact(): Promise<IContact> {
    const res = await this.$http.get('/contact')
    return res?.data
  }
}
