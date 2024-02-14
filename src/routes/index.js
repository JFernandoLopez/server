const express = require('express');
const router = express.Router();
//Create
const { createRoomHandler } = require('../controllers/createRoom');
const { createUserHandler } = require('../controllers/createUser');
//Get all
const { getRoomsHandler } = require('../controllers/getRooms');

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
//Get Useres
//Get UserById
router.get("/user", getUserByIdHandler);
//Get Rooms
router.get("/rooms", getRoomsHandler);
//Get RoomsById
router.get("/room", getRoomByIdHandler);
//Check-in
router.put("/check-in", asignRoomHandler);
//Check-out
router.put("/check-out", checkOutHandler);

module.exports = {
    router,
}