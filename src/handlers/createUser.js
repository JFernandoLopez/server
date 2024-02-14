const {User} = require('../db');

const createUser = async (name, email, identityCard) => {
    const user = await User.findOrCreate({where: {
        email: email, identityCard: identityCard
        },
        defaults: {
            name: name,
            email: email,
            identityCard: identityCard
        }
    })
    return user
}

module.exports = {
    createUser,
}