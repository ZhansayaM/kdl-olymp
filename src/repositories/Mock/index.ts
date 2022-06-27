import { IHttpClient } from 'services/common/HttpClient'

export default class MockRepository {
  /**
   * @constructor
   * @public
   * @param {HttpClient} http - main Http client
   */
  constructor(private $http: IHttpClient) {}

  async getUsers() {
    const data = await this.$http.get(
      'https://jsonplaceholder.typicode.com/users'
    )
    console.log(
      '🐞 ~ file: index.js ~ line 6 ~ UserMock ~ getUsers ~ data',
      data
    )
    return data
  }

  async getUserById(id: number) {
    const data = await this.$http.get(
      'https://jsonplaceholder.typicode.com/users/' + id
    )
    console.log(
      '🐞 ~ file: index.js ~ line 26 ~ MockRepository ~ getUserById ~ data',
      data
    )
    return data
  }
}
