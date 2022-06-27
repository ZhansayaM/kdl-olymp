import { Context } from '@nuxt/types'
import ErrorHandler, { IErrorHandler } from './common/ErrorHandler'
import HttpClient, { IHttpClient } from './common/HttpClient'
import PriceFormat, { IPriceFormat } from './common/priceFormat'
import MonthFormat, { IMonthFormat } from './common/monthFormat'
import PhoneNumber, { IPhoneNumber } from './common/phoneNumber'
import PriceWithDiscount, {
  IPriceWithDiscount,
} from './common/priceWithDiscount'

type commonServices = {
  error: IErrorHandler
  http: IHttpClient
  price: IPriceFormat
  discountPrice: IPriceWithDiscount
  month: IMonthFormat
  phone: IPhoneNumber
}

export type servicesType = {
  common: commonServices
}

const services = (ctx: Context): servicesType => ({
  common: {
    error: new ErrorHandler(ctx.error),
    http: new HttpClient(ctx.$axios),
    price: new PriceFormat(),
    discountPrice: new PriceWithDiscount(),
    month: new MonthFormat(),
    phone: new PhoneNumber(),
  },
})

export default services
