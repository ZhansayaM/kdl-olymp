export interface IFranchiseFAQ {
  id: number
  type: string
  attributes: {
    id: number
    lang: string
    title: string
    description: string
  }
}
