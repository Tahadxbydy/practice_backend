import mongoose from "mongoose";
import db_name from "../constants.js";

const connectdb = async () => {
  try {
    const response = await mongoose.connect(
      process.env.MONGOOSE_URL + "/" + db_name
    );
    console.log("connected to db");
    console.log(response.Collection);
  } catch (error) {
    console.log("mongo db error:" + error);
    process.exit(1);
  }
};
export default connectdb;
