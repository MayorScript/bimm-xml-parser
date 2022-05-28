import express from "express";
const xmlController = require("../controllers/xmlController"); 
const router = express.Router();

router.get("/parse", xmlController.transformXml);

module.exports = router;