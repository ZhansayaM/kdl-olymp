export interface IPages {
  id: string
  type: string
  attributes: {
    created_at: string
    updated_at: string
    image_path: string
    lang: string
    title: string
    text: string
    slug: string
  }
}
