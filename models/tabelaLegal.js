const { DataTypes } = require("sequelize")
const db = require("./database")

const tabelaLegal = db.define("tabelaLegal",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name:{
        type: DataTypes.STRING,
        allowNull:false
    }
})

tabelaLegal.sync()

module.exports = tabelaLegal