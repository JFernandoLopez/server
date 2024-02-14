const { User } = require('../db');

const getUserById = async(idCard) => {
    const user = await User.findOne({
        where: {
            identityCard: idCard
        }
    });
    return user
}

module.exports = {
    getUserById,
}