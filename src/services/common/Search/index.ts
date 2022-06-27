export default class Search {
  public searchElement(arr: string[], val: string) {
    return arr.filter((item) => item.toLowerCase().includes(val.toLowerCase()))
  }
}
