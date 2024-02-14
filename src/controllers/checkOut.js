const { checkOut } = require('../handlers/checkOut');

const checkOutHandler = async(req, res) => {
    try {
        const {
            id,
            userID
        } = req.body;
        const check = await checkOut(id, userID)
        console.log(`User ${userID} left Room ${id}`);
        res.status(200).json(check);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    checkOutHandler,
}