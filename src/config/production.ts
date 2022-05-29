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
    baseUrl: process.env.VEHICLE_BASE_URL_XML,
    vehicleType: process.env.VEHICLE_TYPE_XML,
  },
  db: {
    dbUrl: `mongodb://${process.env.MONGO_NON_ROOT_USERNAME}:${process.env.MONGO_NON_ROOT_PASSWORD}@localhost:27017`,
    dbOptions: {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      autoIndex: false,
      auto_reconnect: true,
      // reconnectTries: 10,
      // reconnectInterval: 500, // Reconnect every 500ms
      poolSize: 50,
      bufferMaxEntries: 0,
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
      // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      family: 4, // Use IPv4, skip trying IPv6
    },
  },
};
