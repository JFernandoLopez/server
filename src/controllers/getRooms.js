const { getRooms } = require('../handlers/getRooms');

const getRoomsHandler = async (req, res) => {
    try {
        const rooms = await getRooms();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

module.exports = {
    getRoomsHandler,
}