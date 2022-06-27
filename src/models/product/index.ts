/* eslint-disable camelcase */
import { IProductTag } from '~/src/models/tag'

export interface IProduct {
  id: number
  title: string
  old_price?: number
  price: number
  tags?: IProductTag[]
}
