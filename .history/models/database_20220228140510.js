const {Sequelize} = require("sequelize")
const novoSequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "password",
    database: "testeexpress"

})