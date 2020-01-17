/** Ez az enum tárolja a szerver kapcsolódó pontjait */
export enum Endpoints {
  GET_ALL = 'http://localhost:8080/hero/all',
  DELETE_ONE = 'http://localhost:8080/hero/delete/',
  UPDATE_ONE = 'http://localhost:8080/hero/update',
  CREATE_ONE = 'http://localhost:8080/hero/new',
  GET_ONE = 'http://localhost:8080/hero/get/'
}
