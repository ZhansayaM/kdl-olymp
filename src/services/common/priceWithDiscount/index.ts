export interface IPriceWithDiscount {
  priceWithDiscount(price: number, discount: number): string
}

export default class PriceWithDiscount implements IPriceWithDiscount {
  priceWithDiscount(price: number, discount: number) {
    // Получаем итоговую цену за вычетом скидки

    const result = price - Math.round((price / 100) * discount)

    // Цена в формате 1 ххх (разделяем по разрядам тысячи и т.д.)
    return result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
  }
}
