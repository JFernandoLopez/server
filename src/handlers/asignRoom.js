const {Room, User} = require('../db');

const asignRoom = async (id, userID) => {
    const room = await Room.findByPk(id);
    const user = await User.findByPk(userID);
    if(room.state === true){
        throw new Error("Room occupied")
    };
    room.state = true;
    room.UserId = userID;
    user.RoomId = id;

    await room.save();
    await user.save();
    return room;
};

module.exports = {
    asignRoom,
};