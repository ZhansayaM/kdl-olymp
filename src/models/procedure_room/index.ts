/* eslint-disable camelcase */
import { IProcedureRoomTag } from '~/src/models/tag'

export interface IWorkingSchedule {
  from_day: number
  to_day: number
  from_time: number
  to_time: number
}

export interface IAppointment {
  date: Date
  time: string
}
export interface IProcedureRoom {
  id: number
  title: string
  location: string
  phone: string
  schedule: IWorkingSchedule[]
  tags: IProcedureRoomTag[]
  icons: string[]
}
