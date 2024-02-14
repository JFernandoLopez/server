const express = require('express');
const router = express.Router();

const { createRoomHandler } = require('../controllers/createRoom');
const { createUserHandler } = require('../controllers/createUser');
const { getUserByIdHandler } = require('../controllers/getUserById');
const { asignRoomHandler } = require('../controllers/checkIn');
const { checkOutHandler } = require('../controllers/checkOut');

//Create Room
router.post("/room", createRoomHandler);
//Create User
router.post("/user", createUserHandler);
//Get Useres
//Get UserById
router.get("/user", getUserByIdHandler);
//Get Rooms
//Get RoomsById
//Check-in
router.put("/check-in", asignRoomHandler);
//Check-out
router.put("/check-out", checkOutHandler);

module.exports = {
    router,
}