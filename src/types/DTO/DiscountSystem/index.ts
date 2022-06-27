export interface IDiscountSystem {
  id: number
  type: string
  attributes: {
    id: number
    image_path: string
    image_back_path: string
    lang: string
    title: string
    description: string
  }
}
