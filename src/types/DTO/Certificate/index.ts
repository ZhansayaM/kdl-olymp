export interface ICertificate {
  id: string
  type: string
  attributes: {
    id: number
    image_path: string
    lang: string
    description: string
  }
}
