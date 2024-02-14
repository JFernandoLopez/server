const { app } = require('./src/index');
const { sequelize } = require('./src/db')
require('dotenv').config;
const { PORT } = process.env;

const { dbConection } = require('./src/utils/dbConection')


sequelize
    .sync({force: true})
    .then(() => {

        dbConection();

        app.listen(PORT, () => {
            console.log(`Server started on port: ${PORT}`);
        })
    })
    .catch(error => {
        console.log(error);
    })