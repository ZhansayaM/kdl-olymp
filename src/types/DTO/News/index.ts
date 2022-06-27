export interface INews {
  id: string
  type: string
  attributes: {
    id: number
    publish_at: string
    created_at: string
    updated_at: string
    category_id: number
    image_index: string
    image_list: string
    image_big: string
    created_at_formatted: string
    publish_at_formatted: string
    updated_at_formatted: string
    lang: string
    title: string
    slug: string
    short_text: string
    text: string
  }
}
