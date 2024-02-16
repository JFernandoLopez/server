const { getRoomById } = require('../handlers/getRoomById');

const getRoomByIdHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const room = await getRoomById(id);
        console.log(`Room ${id} has been founded`);

        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.setHeader('Pragma', 'no-cache');
        res.setHeader('Expires', '0');
        res.setHeader('Surrogate-Control', 'no-store');

        res.status(200).json(room)
    } catch (error) {
        res.status(404).send(error.message)
    }
}

module.exports = {
    getRoomByIdHandler,
}