import mongoose, { Schema } from "mongoose";

const newnewSchema = new Schema(
  {
    mainimg: String,
    time: String,
    logtime: String,
    object: String,
    info: String,
    connect: String,
  },
  {
    timestamps: true,
  }
);

const Newnew = mongoose.models.Newnew || mongoose.model("Newnew", newnewSchema);

export default Newnew;
