export interface IEquipment {
  id: string
  type: string
  attributes: {
    id: number
    image_path: string
    lang: string
    description: string
    equipment_name: string
  }
}
