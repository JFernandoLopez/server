const {Room, User} = require('../db');

const asignRoom = async (id, name) => {
    try {
        const room = await Room.findByPk(id);
        const [user, created] = await User.findOrCreate({where: {
            name: name
        }});

        
        if (room && room.status === true) {
            throw new Error("Room occupied");
        }
        
        await user.reload(); 

        if(user.RoomId !== null){
            throw new Error("User has a Room")
        }

        room.status = true;
        room.UserId = user.id;
        user.RoomId = id;

        await room.save();
        await user.save();
        return room;
    } catch (error) {
        console.log("Error:",error.message);
        return null
    }
};

module.exports = {
    asignRoom,
};