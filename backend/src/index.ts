import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.get("/hello", (req: Request, res: Response) => {
  res.send("World");
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
