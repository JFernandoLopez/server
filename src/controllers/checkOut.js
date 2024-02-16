const { checkOut } = require('../handlers/checkOut');

const checkOutHandler = async(req, res) => {
    try {
        const {
            id
        } = req.body;
        const check = await checkOut(id)
        console.log(`User left Room ${id}`);
        res.status(200).json(check);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    checkOutHandler,
}