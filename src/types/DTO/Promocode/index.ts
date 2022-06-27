export interface IPromocode {
  id: string
  type: string
  attributes: {
    id: number
    offer_id: number
    lang: string
    title: string
    description: string
  }
}
