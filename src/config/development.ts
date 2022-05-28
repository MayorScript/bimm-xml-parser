import { format, transports } from "winston";

module.exports = {
  port: process.env.APP_PORT || 3000,
  host: process.env.APP_URL || "http://localhost",
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
  logging: {
    format: format.combine(format.timestamp(), format.json()),
    transports: [
      new transports.File({ filename: "../logs/logs.log" }),
      new transports.Console(),
    ],
  },
  xml: {
    vehicleType: process.env.VEHICLE_TYPE_XML,
    vehicleMake: process.env.VEHICLE_MAKE_XML,
  },
};
