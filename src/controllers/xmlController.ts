import {Request, Response} from "express";
import XmlService from "../services/xmlService";
import logger from "../utils/logger";

const xmlService = new XmlService();

/**
 * 
 * @param req 
 * @param res 
 */
const transformXml = async (req: Request, res: Response) => {
    try{
        const { makeId } = req.body;
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
