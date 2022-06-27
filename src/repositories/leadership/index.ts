import { IHttpClient } from 'services/common/HttpClient'
import { ILeadership } from 'types/DTO/Leadership'

export interface ILeadershipRepository {
  getLeadership(slug: string): Promise<any>
  getAllLeadership(): Promise<any>
}

export default class Leadership implements ILeadershipRepository {
  constructor(private $http: IHttpClient) {}

  async getLeadership(slug: string): Promise<ILeadership> {
    const res = await this.$http.get(`/leadership/${slug}`)
    return res?.data
  }

  async getAllLeadership(): Promise<ILeadership> {
    const res = await this.$http.get('/leadership')
    return res?.data
  }
}
