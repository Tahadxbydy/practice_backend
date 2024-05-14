import "dotenv/config";
import mongoose from "mongoose";

import db_name from "./constants.js";

import connectdb from "./db/index.js";

await connectdb();

// (async () => {
//   try {
//     const connect = await mongoose.connect(`${process.env.MONGOOSE_URL}`);
//     console.log("Connected to :" + connect.connection.name);
//     // console.log(connect.)
//   } catch (e) {
//     console.log(e);
//     process.exit(1);
//   }
// })();
