const { Room } = require('../db');

const getRoomById = async (id) => {
    try {
        const room = await Room.findByPk(id);
        if(!room){
            throw new Error('Room not founded')
        }
        return room
        } 
    catch (error) {
        console.log('Room not founded');
        return null
    }
}

module.exports = {
    getRoomById
}