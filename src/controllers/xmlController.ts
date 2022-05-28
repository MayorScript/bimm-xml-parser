import {Request, Response} from "express";
import XmlService from "../services/xmlService";

const xmlService = new XmlService();

/**
 * 
 * @param req 
 * @param res 
 */
const transformXml = async (req: Request, res: Response) => {
    //
}
module.exports = { transformXml };