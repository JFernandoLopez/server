const { getUserById } = require('../handlers/getUserById');

const getUserByIdHandler = async (req, res) => {
    try {
        const {idCard} = req.params;
        const user = await getUserById(idCard);
        res.status(200).json(user);
    } catch (error) {
        console.log('User not founded');
        res.status(404).json(error.message);
    }
}

module.exports = {
    getUserByIdHandler,
}