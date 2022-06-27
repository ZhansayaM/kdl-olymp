import { IProcedureRoom } from '~/src/models/procedure_room'

const procedureRooms: IProcedureRoom[] = [
  {
    id: 1,
    title: 'Процедурный кабинет КДЛ "ОЛИМП"',
    location: 'пр. Аль-Фараби, 9, блок 5 Г',
    phone: '259-69-79',
    schedule: [
      {
        from_day: 1,
        to_day: 5,
        from_time: 8,
        to_time: 15,
      },
      {
        from_day: 6,
        to_day: 7,
        from_time: 8,
        to_time: 13,
      },
    ],
    tags: [
      { id: 1, title: 'Без выходных' },
      { id: 2, title: 'Работает в праздничные дни' },
    ],
    icons: ['calendar 77', 'card-pay', 'virus', 'kaspi-red'],
  },
  {
    id: 2,
    title: 'Процедурный кабинет КДЛ "ОЛИМП"',
    location: 'пр. Аль-Фараби, 9, блок 5 Г',
    phone: '259-69-79',
    schedule: [
      {
        from_day: 1,
        to_day: 5,
        from_time: 8,
        to_time: 15,
      },
      {
        from_day: 6,
        to_day: 7,
        from_time: 8,
        to_time: 13,
      },
    ],
    tags: [
      { id: 1, title: 'Без выходных' },
      { id: 2, title: 'Работает в праздничные дни' },
    ],
    icons: ['calendar', 'card-pay', 'covid-19', 'kaspiRed'],
  },
  {
    id: 3,
    title: 'Процедурный кабинет КДЛ "ОЛИМП"',
    location: 'пр. Аль-Фараби, 9, блок 5 Г',
    phone: '259-69-79',
    schedule: [
      {
        from_day: 1,
        to_day: 5,
        from_time: 8,
        to_time: 15,
      },
    ],
    tags: [
      { id: 1, title: 'Без выходных' },
      { id: 2, title: 'Работает в праздничные дни' },
    ],
    icons: ['calendar', 'card-pay', 'covid-19', 'kaspiRed'],
  },
  {
    id: 4,
    title: 'Процедурный кабинет КДЛ "ОЛИМП"',
    location: 'пр. Аль-Фараби, 9, блок 5 Г',
    phone: '259-69-79',
    schedule: [
      {
        from_day: 1,
        to_day: 7,
        from_time: 7,
        to_time: 24,
      },
    ],
    tags: [
      { id: 1, title: 'Без выходных' },
      { id: 2, title: 'Работает в праздничные дни' },
    ],
    icons: ['calendar', 'card-pay', 'covid-19', 'kaspiRed'],
  },
  {
    id: 5,
    title: 'Процедурный кабинет КДЛ "ОЛИМП"',
    location: 'пр. Аль-Фараби, 9, блок 5 Г',
    phone: '259-69-79',
    schedule: [
      {
        from_day: 1,
        to_day: 5,
        from_time: 8,
        to_time: 15,
      },
      {
        from_day: 6,
        to_day: 7,
        from_time: 8,
        to_time: 13,
      },
    ],
    tags: [
      { id: 1, title: 'Без выходных' },
      { id: 2, title: 'Работает в праздничные дни' },
    ],
    icons: ['calendar', 'card-pay', 'covid-19', 'kaspiRed'],
  },
]

export default procedureRooms
