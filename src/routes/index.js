const express = require('express');
const router = express.Router();

const { asignRoomHandler } = require('../handlers/asignRoom');
const { checkOutHandler } = require('../handlers/checkOut')

//Check-in
router.put("/check-in", asignRoomHandler);
//Check-out
router.put("/check-out", checkOutHandler);

module.exports = {
    router,
}