const { asignRoom } = require('../handlers/asignRoom');

const asignRoomHandler = async (req, res) => {
    const {
        id,
        userID
    } = req.body;

    try {
        const asign = asignRoom(id, userID);
        console.log(`User ${userID} has been asigned to ${id}`);
        res.status(200).json(asign);
    } catch (error) {
        res.status(400).send(error.message);
    };
};

module.exports = {
    asignRoomHandler,
}