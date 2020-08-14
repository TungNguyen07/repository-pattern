import express from "express";
const app = express();
const port = 4000;
import userRouter from "./routes/user.route";
import bodyParser from "body-parser";
import cors from "cors";
import db from "./db/db";

db;
app.use(
  bodyParser.json({
    type: "application/json",
    extended: true,
    parameterLimit: 100000,
    limit: "10mb",
  })
);

app.use(cors());

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
