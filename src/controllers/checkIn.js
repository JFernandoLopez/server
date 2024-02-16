const { asignRoom } = require('../handlers/CheckIn');

const asignRoomHandler = async (req, res) => {
    try {
        const {
            id,
            name
        } = req.body;
        const asign = await asignRoom(id, name);
        if(asign !== null || undefined){
            console.log(`User ${name} has been asigned to ${id}`);
            res.status(200).json(asign)}
        else{
            throw new Error("Room occupied")
        };  
    } catch (error) {
        res.status(400).send(error.message);
    };
};

module.exports = {
    asignRoomHandler,
}