import { IHttpClient } from 'services/common/HttpClient'
import { IAnalysisPrepare } from 'types/DTO/Prepare'

export interface IAnalysisPrepareRepository {
  getAnalysisPrepare(): Promise<any>
}

export default class AnalysisPrepare implements IAnalysisPrepareRepository {
  constructor(private $http: IHttpClient) {}

  async getAnalysisPrepare(): Promise<IAnalysisPrepare> {
    const res = await this.$http.get('/analysis-prepare')
    return res.data
  }
}
