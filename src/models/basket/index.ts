import { IProduct } from '~/src/models/product'

export interface IBasketItem extends IProduct {
  autoAdded?: boolean
  info?: string
  count?: number
  appointment?: boolean
}
