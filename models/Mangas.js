const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
    'mangas',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        manga_image_url: {
            type: Sequelize.STRING
        },
        manga_title: {
            type: Sequelize.STRING
        },
        manga_synopsis: {
            type: Sequelize.STRING
        },
        user_id: {
            type: Sequelize.INTEGER,
            references: 'user', // <<< Note, its table's name, not object name
            referencesKey: 'id' // <<< Note, its a column name
        },
    },
    {
        timestamps: false
    }
)