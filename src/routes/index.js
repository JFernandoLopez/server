const express = require('express');
const router = express.Router();

const { asignRoomHandler } = require('../controllers/checkIn');
const { checkOutHandler } = require('../controllers/checkOut');
const { createRoomHandler } = require('../controllers/createRoom');
const { createUserHandler } = require('../controllers/createUser');

//Create Room
router.post("/room", createRoomHandler);
//Create User
router.post("/user", createUserHandler);
//Check-in
router.put("/check-in", asignRoomHandler);
//Check-out
router.put("/check-out", checkOutHandler);

module.exports = {
    router,
}