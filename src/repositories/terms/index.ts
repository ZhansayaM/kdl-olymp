import { IHttpClient } from 'services/common/HttpClient'
import { ITerms } from 'types/DTO/Terms'

export interface ITermsRepository {
  getTerms(): Promise<any>
}

export default class Terms implements ITermsRepository {
  constructor(private $http: IHttpClient) {}

  async getTerms(): Promise<ITerms> {
    const res = await this.$http.get('/terms')
    return res?.data
  }
}
