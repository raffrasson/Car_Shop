export default interface IService<T> {
  create(obj: T): Promise<T>,
  read(): Promise<T[]>,
  readOne(string: string): Promise<T | any>,
  update(string: string, object: object): Promise<T | null>,
  delete(string: string): Promise<T | null>,
}