import { Request, Response } from "express";
import axios from "axios";
const config = require("../config");
const vehicleType = config.vehicleType;
const vehicleMake = config.vehicleMake;

class XmlService {
  async transform(req: Request, res: Response): Promise<any>{
      //
  }
}
export default XmlService;
