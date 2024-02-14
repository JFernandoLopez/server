const { getUsers } = require('../handlers/getAllUsers');

const getUsersHandler = async (req, res) => {
    try {
        const users = await getUsers();
        res.status(200).json(users);
    } catch (error) {
        console.log('Users not founded');
        res.status(404).send(error.message);
    }
}

module.exports = {
    getUsersHandler,
}