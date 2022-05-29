import express, {Application, Request, Response} from "express";
import cors from "cors";
require("dotenv").config();

import config from "./config";

const app: Application = express();

// parsing incoming requests body and append data to req.body
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors(config.cors)); // enable cors request

// api routes
app.get("/", (req: Request, res: Response) => {
  res.send("XML PARSER");
});
app.use('/xml', require("./routes/xmlRoute"));

export default app;