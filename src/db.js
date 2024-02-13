const {Sequelize} = require('sequelize');
const UserModel = require('./models/User');
const RoomModel = require('./models/Room');
require('dotenv').config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
    {logging: false, native: false}
)

UserModel(sequelize);
RoomModel(sequelize);

const { User, Room } = sequelize.models;

User.hasOne(Room);
Room.hasOne(User);

module.exports = {
    User,
    Room,
    sequelize
}
