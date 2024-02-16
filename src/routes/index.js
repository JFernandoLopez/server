const express = require('express');
const router = express.Router();
//Create
const { createRoomHandler } = require('../controllers/createRoom');
const { createUserHandler } = require('../controllers/createUser');
//Get all
const { getRoomsHandler } = require('../controllers/getRooms');
const { getUsersHandler } = require('../controllers/getAllUsers');
//Get by property
const { getUserByIdHandler } = require('../controllers/getUserById');
const { getRoomByIdHandler } = require('../controllers/getRoomById');
//Check In and Check Out
const { asignRoomHandler } = require('../controllers/checkIn');
const { checkOutHandler } = require('../controllers/checkOut');

//Create Room
router.post("/room", createRoomHandler);
//Create User
router.post("/user", createUserHandler);
//Get Users
router.get("/users", getUsersHandler);
//Get UserById
router.get("/users/:idCard", getUserByIdHandler);
//Get Rooms
router.get("/rooms", getRoomsHandler);
//Get RoomsById
router.get("/rooms/:id", getRoomByIdHandler);
//Check-in
router.put("/check-in", asignRoomHandler);
//Check-out
router.put("/check-out", checkOutHandler);

module.exports = {
    router,
}