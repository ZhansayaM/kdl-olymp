import { IBasketItem } from '~/src/models/basket'

const products: IBasketItem[] = [
  {
    id: 1,
    title:
      'Антитела к бокаловидным клеткам кишечника и антитела к экзокринным клеткам поджелудочной железы',
    old_price: 7800,
    price: 6800,
    tags: [
      {
        id: 1,
        title: 'Доступно с выездом на дом',
      },
      {
        id: 2,
        title: '1-5 дней',
      },
    ],
    autoAdded: false,
    count: 1,
    appointment: true,
  },
  {
    id: 2,
    title: 'Анти-ТГ (антитела к тиреоглобулину)',
    old_price: 5800,
    price: 4800,
    tags: [
      {
        id: 2,
        title: '1-5 дней',
      },
    ],
    autoAdded: false,
    count: 1,
  },
  {
    id: 4,
    title: 'Взятие венозной крови',
    price: 400,
    info: 'Необходимо для оказания выбранной вами услуги',
    autoAdded: true,
    count: 1,
  },
]

export default products
