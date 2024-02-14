const { User, Room } = require('../db');

const getUsers = async() => {
    const users = await User.findAll({
        include: {
            model: Room, attributes: ["id", "type"]
        }
    })
    return users
}

module.exports = {
    getUsers,
}