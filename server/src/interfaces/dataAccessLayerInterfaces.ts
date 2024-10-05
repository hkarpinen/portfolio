export interface IDataAccessLayer<T> {
  getById(id: string): Promise<T | null>
  getByQuery(filter: Partial<T>): Promise<T[]>
  createOne(item: T): Promise<T>
  updateById(id: string, item: Partial<T>): Promise<T | null>
  deleteById(id: string): Promise<void>
}
