import { IHttpClient } from 'services/common/HttpClient'
import { IEquipment } from 'types/DTO/Equipment'

export interface IEquipmentRepository {
  getEquipment(slug: string): Promise<any>
  getAllEquipment(): Promise<any>
}

export default class Equipment implements IEquipmentRepository {
  constructor(private $http: IHttpClient) {}

  async getEquipment(slug: string): Promise<IEquipment> {
    const res = await this.$http.get(`/equipment/${slug}`)
    return res?.data
  }
  async getAllEquipment(): Promise<IEquipment> {
    const res = await this.$http.get('/equipment')
    return res?.data
  }
}
