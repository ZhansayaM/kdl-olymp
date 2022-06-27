export interface IInfectiousDisease {
  id: string
  type: string
  attributes: {
    id: number
    lang: string
    title: string
    description: string
    agreement_one: string
    agreement_two: string
  }
}
