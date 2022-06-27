import { IHttpClient } from 'services/common/HttpClient'
import { ICertificate } from 'types/DTO/Certificate'

export interface ICertificateRepository {
  getCertificate(): Promise<any>
}

export default class Certificate implements ICertificateRepository {
  constructor(private $http: IHttpClient) {}

  async getCertificate(): Promise<ICertificate> {
    const res = await this.$http.get('/certificate')
    return res.data
  }
}
