import { Request, Response } from "express";
import axios from "../utils/axiosInstance";
import { parseString, parseStringPromise } from "xml2js"; 

const config = require("../config");
const logger = require("../utils/logger");

const vehicleType = config.xml.vehicleType;

interface VehicleTypes {
  typeId: any;
  typeName: any;
}
class XmlService {
  /**
   * 
   * @param req 
   * @param res 
   * @param makeId 
   * @returns 
   */
  async transform(
    makeId: number,
  ): Promise<any> {
    const getVehicleData = await axios.get(`${vehicleType}/${makeId}`);
    logger.info("Retrieving xml data");
    const xmlVehicleData =
      '<?xml version=”1.0" encoding=”UTF-8"?>' + getVehicleData.data;
    // transform xml data
    logger.info("Transforming xml data to json");
    const results = await parseStringPromise(xmlVehicleData, {
      mergeAttrs: true,
    });

    // initialize array for vehiclce types
    let vehicleTypesArr: VehicleTypes[] = [];
    // check if make id exists
    if (!results.Response.Results[0]) throw Error("Invalid maker id!");
    // loop through to get data from VehicleTypesForMakeIds
    await results.Response.Results[0].VehicleTypesForMakeIds.forEach(
      (child: any) => {
        // push objects to vehicleTypesArr
        vehicleTypesArr.push({
          typeId: child.VehicleTypeId[0],
          typeName: child.VehicleTypeName[0],
        });
      },
    );

    // new objects to be returned
    const newObject = {
      makeId: results.Response.SearchCriteria[0],
      makeName: "[value]",
      vehicleTypes: vehicleTypesArr,
    };
    logger.info("Data transform completed successfully!");
    return newObject;
  }
}
export default XmlService;
