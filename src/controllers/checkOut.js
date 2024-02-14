const { checkOut } = require('../handlers/checkOut');

const checkOutHander = async(req, res) => {
    try {
        const {
            id,
            userId
        } = req.body;
        const check = await checkOut(id, userId)
        console.log(`User ${userId} left Room ${id}`);
        res.status(200).json(check);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    checkOutHander,
}