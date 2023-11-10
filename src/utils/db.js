import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("DB is Connected");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connectMongoDB;
