const { Room } = require('../db');

const createRoom = async(type, floor, price, description, image) => {
    const room = await Room.create({
        type: type,
        floor: floor,
        price: price,
        description: description,
        image: image,
    });

    return room;
}

module.exports = {
    createRoom,
}