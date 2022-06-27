export interface IContact {
  id: string
  type: string
  attributes: {
    id: number
    phone: string
    phone_two: string
    phone_whatsapp: string
    phone_telegram: string
    start_time: string
    end_time: string
    start_day_id: number
    end_day_id: number
  }
}
