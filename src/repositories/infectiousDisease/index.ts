import { IHttpClient } from 'services/common/HttpClient'
import { IInfectiousDisease } from 'types/DTO/InfectiousDisease'

export interface IInfectiousDiseaseRepository {
  getInfectiousDisease(): Promise<any>
}

export default class InfectiousDisease implements IInfectiousDiseaseRepository {
  constructor(private $http: IHttpClient) {}

  async getInfectiousDisease(): Promise<IInfectiousDisease> {
    const res = await this.$http.get('/infectious-disease')
    return res?.data
  }
}
