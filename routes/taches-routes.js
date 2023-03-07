const express = require("express");
const router = express.Router();
const TachesController = require("../controllers/TachesController");

router.use('/taches',TachesController);

module.exports=router;