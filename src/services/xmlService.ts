import { Request, Response } from "express";
import axios from "../utils/axiosInstance";
import { parseStringPromise } from "xml2js"; 
import { VehicleTypes } from "../types/vehicle.types";

// import model to save data
import {XmlData} from "../models/xmlDataModel";

import config from "../config";
import logger from "../utils/logger";

const vehicleType = config.xml.vehicleType;

class XmlService {
  /**
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
    const makeID = results.Response.SearchCriteria[0];
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

    // insert into database
    await XmlData.findOneAndUpdate(
      { makeId: makeID },
      { $set: { vehicleTypes: vehicleTypesArr } },
      { upsert: true, new: true },
    );

    // new objects to be returned
    const newObject = {
      makeId: makeID,
      makeName: "[value]",
      vehicleTypes: vehicleTypesArr,
    };
    logger.info("Data transform completed successfully!");
    return newObject;
  }
}
export default XmlService;
