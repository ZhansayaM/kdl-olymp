export interface IPriceFormat {
  priceFormat(price: number): string
}

export default class PriceFormat implements IPriceFormat {
  // Цена в формате 1 ххх (разделяем по разрядам тысячи и т.д.)

  priceFormat(price: number) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
}
