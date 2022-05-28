import {Request, Response} from "express";
import XmlService from "../services/xmlService";
const logger = require("../utils/logger");

const xmlService = new XmlService();

/**
 * 
 * @param req 
 * @param res 
 */
const transformXml = async (req: Request, res: Response) => {
    try{
        const { makeId } = req.body;
        // validation
        if(!('makeId' in req.body))throw Error("Vehicle makeId is required!");
        if(typeof makeId !== 'number') throw Error("Make id is not a string. Should be a number!");
        // return response
        const result = await xmlService.transform(makeId);
        res.json(result);
    }catch(err: any){
        logger.error(`An error occured ${err.message}`);
        res.status(400).json({
            message: "An error occured",
            error: err.message
        });
    }
}
module.exports = { transformXml };
