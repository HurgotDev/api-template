import { Sequelize } from 'sequelize'

export const sequelizeConnect = (): Sequelize => {
  const sequelize = new Sequelize('database', 'username', 'password', {
    port: 3306,
    host: 'localhost',
    define: {
      freezeTableName: true
    },
    dialect: 'mysql',
    logging: process.env.NODE_ENV === 'development' ? console.log : false
  })

  return sequelize
}
