export interface ISales {
  id: number
  type: string
  attributes: {
    id: number
    price: string
    price_discount: string
    created_at: string
    updated_at: string
    is_deleted: number
    date_from: number
    date_before: number
    image_path: string
    lang: string
    title: string
    description: string
    period: string
    date: string
    rightDescription: string
  }
}
