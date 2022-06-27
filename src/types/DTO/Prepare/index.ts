export interface IAnalysisPrepare {
  id: number
  type: string
  attributes: {
    id: number
    created_at: string
    updated_at: string
    category_id: number
    lang: string
    title: string
    description: string
  }
}
