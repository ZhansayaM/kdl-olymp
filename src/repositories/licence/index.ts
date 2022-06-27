import { IHttpClient } from 'services/common/HttpClient'
import { ILicence } from 'types/DTO/Licence'

export interface ILicenceRepository {
  getLicence(): Promise<any>
}

export default class Licence implements ILicenceRepository {
  constructor(private $http: IHttpClient) {}

  async getLicence(): Promise<ILicence> {
    const res = await this.$http.get('/licence')
    return res?.data
  }
}
