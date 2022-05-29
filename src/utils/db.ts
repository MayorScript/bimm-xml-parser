import mongoose, { ConnectOptions } from "mongoose";
import config from "../config";
import logger from "../utils/logger";

mongoose.Promise = global.Promise;

async function connect() {
  const dbUrl = config.db.dbUrl;
  try {
    await mongoose.connect(dbUrl);
    logger.info("Database Connected");
  } catch (error) {
    logger.error("Could not connect to Database", error);
    process.exit(1);
  }
}
export default connect;