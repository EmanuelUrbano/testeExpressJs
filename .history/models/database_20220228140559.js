const {Sequelize} = require("sequelize")
const novoSequelize = new Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: "root",
    password: "password",
    database: "testeexpress"

})
try {
    await novoSequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }