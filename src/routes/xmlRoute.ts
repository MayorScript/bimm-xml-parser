import express from "express";
import validate from "../middlewares/validator"; // validator middleware
import xmlSchema from "../schema/xmlSchema"; // validate schema
const xmlController = require("../controllers/xmlController"); 
const router = express.Router();

router.post("/transform", validate(xmlSchema), xmlController.transformXml);

module.exports = router;