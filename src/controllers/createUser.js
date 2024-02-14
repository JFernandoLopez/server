const { createUser } = require('../handlers/createUser');

const createUserHandler = async (req, res) => {
    try {
        const {
            name, 
            email, 
            identityCard
        } = req.body;
        const user = await createUser(name, email, identityCard);
        res.status(201).json(user)
    } catch (error) {
        res.status(400).send({error: 'Something happen with user'});
    }
}

module.exports = {
    createUserHandler,
}