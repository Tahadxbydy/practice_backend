import "dotenv/config";

import { app } from "./app.js";

import connectdb from "./db/index.js";

connectdb()
  .then(
    app.listen(process.env.PORT || 8000, () => {
      console.log(`⚙️ Server is running at port : ${process.env.PORT}`);
    })
  )
  .catch();

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
