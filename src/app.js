import express from "express";
const app = express();
import cookieParser from "cookie-parser";
import cors from "cors";

app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ limit: "16kb", extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

import userrouter from "./routes/user.routes.js";

app.use("/users", userrouter);

export { app };
