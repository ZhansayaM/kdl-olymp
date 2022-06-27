export interface IFranchise {
  data: {
    id: number
    type: string
    attributes: {
      id: number
      payment: number
      reward: number
      royalty: number
      lang: string
      title: string
      description: string
    }
  }

}
