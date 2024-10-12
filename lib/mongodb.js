import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("connect success");
  } catch (err) {
    console.log(err);
  }
};

export default connectMongoDB;
