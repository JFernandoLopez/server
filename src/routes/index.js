const express = require('express');
const router = express.Router();

const { asignRoomHandler } = require('../controllers/asignRoom');
const { checkOutHandler } = require('../controllers/checkOut')

//Check-in
router.put("/check-in", asignRoomHandler);
//Check-out
router.put("/check-out", checkOutHandler);

module.exports = {
    router,
}