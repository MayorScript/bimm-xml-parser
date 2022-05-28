import app from "./server";
const config = require("./config");
const logger = require("./utils/logger");

const PORT: number = config.port;

// initialize server
app.listen(PORT,() => {
    logger.info(`Application running at port http://localhost:${PORT}`);
});