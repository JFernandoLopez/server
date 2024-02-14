const { getRoomById } = require('../handlers/getRoomById');

const getRoomByIdHandler = async (req, res) => {
    try {
        const {id} = req.body;
        const room = await getRoomById(id);
        console.log(`Room ${id} has been founded`);
        res.status(200).json(room)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getRoomByIdHandler,
}