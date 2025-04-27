import express from "express";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const APP_PORT = process.env.APP_PORT || 3333;

app.get("/check", (_, res) => {
  res.sendStatus(200);
});

app.listen(APP_PORT, () =>
  console.log(`Server is running on port ${APP_PORT}`),
);
