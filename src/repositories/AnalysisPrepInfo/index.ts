import { IHttpClient } from 'services/common/HttpClient'
import { IAnalysisPrepInfo } from 'types/DTO/AnalysisPrepInfo'

export interface IAnalysisPrepInfoRepository {
  getAnalysisPrepInfo(): Promise<any>
}

export default class AnalysisPrepInfo implements IAnalysisPrepInfoRepository {
  constructor(private $http: IHttpClient) {}

  async getAnalysisPrepInfo(): Promise<IAnalysisPrepInfo> {
    const res = await this.$http.get('/analysis-info')
    return res.data
  }
}
