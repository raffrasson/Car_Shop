export interface IModel<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(string: string): Promise<T | any>,
  update(string: string, object: object): Promise<T | any>,
  delete(string: string): Promise<T | any>,
}