import mongoose, {Schema, Model, Document} from "mongoose";
import {VehicleType} from "../types/vehicle.types";

type XmlDataDocument = Document & VehicleType;

const xmlDataSchema = new Schema(
  {
    makeId: {
      type: Schema.Types.String,
      required: true,
    },
    makeName: {
      type: Schema.Types.String,
    },
    vehicleTypes: [
      {
        typeId: {
          type: Schema.Types.String,
          required: true,
        },
        typeName: {
          type: Schema.Types.String,
          required: true,
        },
      },
    ],
  },
  { timestamps: true },
);
const XmlData: Model<XmlDataDocument> = mongoose.model<XmlDataDocument>(
  "XmlData",
  xmlDataSchema,
);
export { XmlData, XmlDataDocument };