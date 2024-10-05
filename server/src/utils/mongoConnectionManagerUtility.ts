import mongoose, { Connection } from 'mongoose'
import { getEnvironmentVariable } from '../helpers/envHelpers'

class MongoConnectionManager {
  private connections: Map<string, Connection>

  constructor() {
    this.connections = new Map()
  }

  async getConnection(dbName: string): Promise<Connection> {
    if (!this.connections.has(dbName)) {
      const connection = mongoose.createConnection(
        getEnvironmentVariable('MONGO_URI'),
        {
          dbName: dbName,
        },
      )
      this.connections.set(dbName, connection)
    }

    const connection = this.connections.get(dbName)
    if (!connection) {
      throw new Error('Connection not found')
    }

    return connection
  }
}

const mongoConnectionManager = new MongoConnectionManager()

export default mongoConnectionManager
