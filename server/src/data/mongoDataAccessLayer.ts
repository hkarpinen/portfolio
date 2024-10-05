import { Model } from 'mongoose'
import mongoConnectionManager from '../utils/mongoConnectionManagerUtility'
import { IDataAccessLayer } from '../interfaces/dataAccessLayerInterfaces'

class MongoDataAccessLayer<T> implements IDataAccessLayer<T> {
  private model: Model<T>
  private readonly dbName: string

  constructor(model: Model<T>, dbName: string) {
    this.model = model
    this.dbName = dbName
  }

  async getById(id: string): Promise<T | null> {
    const connection = await mongoConnectionManager.getConnection(this.dbName)
    const Model = connection.model<T>(this.model.modelName, this.model.schema)
    return Model.findById(id).exec()
  }

  async getByQuery(filter: Partial<T>): Promise<T[]> {
    const connection = await mongoConnectionManager.getConnection(this.dbName)
    const Model = connection.model<T>(this.model.modelName, this.model.schema)
    return Model.find(filter).exec()
  }

  async createOne(item: T): Promise<T> {
    const connection = await mongoConnectionManager.getConnection(this.dbName)
    const Model = connection.model<T>(this.model.modelName, this.model.schema)
    const document = new Model(item)
    const result = await document.save()
    return result as T
  }

  async updateById(id: string, item: Partial<T>): Promise<T | null> {
    const connection = await mongoConnectionManager.getConnection(this.dbName)
    const Model = connection.model<T>(this.model.modelName, this.model.schema)
    return Model.findByIdAndUpdate(id, item, { new: true }).exec()
  }

  async deleteById(id: string): Promise<void> {
    const connection = await mongoConnectionManager.getConnection(this.dbName)
    const Model = connection.model<T>(this.model.modelName, this.model.schema)
    await Model.findByIdAndDelete(id).exec()
  }
}

export default MongoDataAccessLayer
