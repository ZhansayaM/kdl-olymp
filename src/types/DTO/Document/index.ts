export interface IDocument {
  id: string
  type: string
  attributes: {
    file_path: string
    id: number
    document_id: number
    lang: string
    title: string
  }
}
