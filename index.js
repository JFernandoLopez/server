const { app } = require('./src/index');
const { sequelize } = require('./src/db')
require('dotenv').config;
const { PORT } = process.env;


sequelize
    .sync({alter: true})
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })