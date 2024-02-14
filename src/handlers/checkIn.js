const {Room, User} = require('../db');

const asignRoom = async (id, userID) => {
    try {
        const room = await Room.findByPk(id);
        const user = await User.findByPk(userID);

        if (room && room.status === true) {
            throw new Error("Room occupied");
        }

        room.status = true;
        room.UserId = userID;
        user.RoomId = id;

        await user.save();
        await room.save();
        return room;
    } catch (error) {
        console.log("Error:",error.message);
        return null
    }
};

module.exports = {
    asignRoom,
};