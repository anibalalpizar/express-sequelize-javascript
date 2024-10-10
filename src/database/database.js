import Sequelize from "sequelize";

export const sequelize = new Sequelize('postgres_db', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
})