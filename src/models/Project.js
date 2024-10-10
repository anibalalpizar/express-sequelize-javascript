import { DataTypes } from 'sequelize';
import { sequelize } from '../database/database.js';
import { Tasks } from './Task.js';

export const Project = sequelize.define('projects', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    },
}, { timestamps: false });

Project.hasMany(Tasks, { foreignKey: 'projectId', sourceKey: 'id' });
Tasks.belongsTo(Project, { foreignKey: 'projectId', targetKey: 'id' });