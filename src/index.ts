import app from "./server";
import connect from "./utils/db";
import config from "./config";
import logger from "./utils/logger";

const PORT: number = config.port;

// initialize server
app.listen(PORT, async () => {
    // connect database
    await connect();
    logger.info(`Application running at port http://localhost:${PORT}`);
});