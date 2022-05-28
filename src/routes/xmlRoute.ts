import express from "express";
const xmlController = require("../controllers/xmlController"); 
const router = express.Router();

router.post("/transform", xmlController.transformXml);

module.exports = router;