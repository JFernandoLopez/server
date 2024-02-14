const { createRoom } = require('../handlers/createRoom');

const createRoomHandler = async (req, res) => {
    try {
        const {
            type,
            floor,
            price,
            description,
            image
        } = req.body
        const room = await createRoom();
        res.status(200).json(room)
    } catch (error) {
        res.status(400).send(error.message, 'Someting went bad')
    }
};