const {Room, User} = require('../db');

const checkOut = async (id, userID) => {
    const room = await Room.findByPk(id);
    const user = await User.findByPk(userID);

    room.state = false;
    room.UserId = null;
    user.RoomId = null;

    await room.save();
    await user.save();
    return room;
}