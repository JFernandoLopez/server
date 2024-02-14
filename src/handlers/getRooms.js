const { Room, User } = require('../db');

const getRooms = async () => {
    try {
        const rooms = await Room.findAll({
            include: {
                model: User, attributes: ["identityCard", "name"]
            }
        });
        if(rooms.length === 0) throw new Error("There's no rooms in db")
        return rooms
    } catch (error) {
        return null
    }
}

module.exports = {
    getRooms,
}