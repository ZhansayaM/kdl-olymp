import { IHttpClient } from 'services/common/HttpClient'
import { IDocument } from 'types/DTO/Document'

export interface IDocumentRepository {
  getDocument(): Promise<any>
}

export default class Document implements IDocumentRepository {
  constructor(private $http: IHttpClient) {}

  async getDocument(): Promise<IDocument> {
    const res = await this.$http.get('/document')
    return res?.data
  }
}
