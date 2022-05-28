import { createLogger } from 'winston';
// @ts-ignore
import config from '../config';
const logger = createLogger(config.logging);

module.exports = logger;