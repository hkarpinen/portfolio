import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
import { getEnvironmentVariable } from '../helpers/envHelpers'

dotenv.config()

class SqlConnectionManager {
  private connections: Map<string, Sequelize>

  constructor() {
    this.connections = new Map()
  }

  async getConnection(dbName: string): Promise<Sequelize> {
    if (!this.connections.has(dbName)) {
      const sequelize = new Sequelize(
        dbName,
        getEnvironmentVariable('MYSQL_DB_USER'),
        getEnvironmentVariable('MYSQL_DB_PASSWORD'),
        {
          host: getEnvironmentVariable('MYSQL_DB_HOST'),
          dialect: 'mysql',
        },
      )

      try {
        await sequelize.authenticate()
        console.log(
          `Connection to ${dbName} has been established successfully.`,
        )
        this.connections.set(dbName, sequelize)
      } catch (error) {
        console.error('Unable to connect to the database:', error)
        throw new Error('Database connection failed')
      }
    }

    const connection = this.connections.get(dbName)
    if (!connection) {
      throw new Error('Connection not found')
    }

    return connection
  }
}

const sqlConnectionManager = new SqlConnectionManager()
export default sqlConnectionManager
