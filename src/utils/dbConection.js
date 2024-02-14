const rooms = require('../../api/rooms.json');
const users = require('../../api/users.json');

const { Room, User } = require('../db');

const dbConection = async () => {
    try {
        const roomDB = rooms.map((room) => Room.create({
            type: room.type,
            floor: room.floor,
            price: room.price,
            description: room.description,
            image: room.image
        }))

        await Promise.all(roomDB).then(() =>
        console.log("### Rooms successfully charged ###")
        );

        const usersDB = users.map((user) => User.create({
            name: user.name,
            email: user.email,
            identityCard: user.identityCard
        }))

        await Promise.all(usersDB).then(() => {
            console.log("### Users successfully charged ###");
        })
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    dbConection,
}