import mongoose, { Schema } from "mongoose";

const itinarieSchema = new Schema(
  {
    tag: String,
    title: String,
    description: String,
    mainImg: String,
    contry: String,
    city: String,
    month: String,
    days: String,
    cost: String,
    airFirst: String,
    airSecond: String,
    airThird: String,
    spotFirst: String,
    spotFirstInfo: String,
    spotFirstImg: String,
    spotSecond: String,
    spotSecondInfo: String,
    spotSecondImg: String,
    spotThird: String,
    spotThirdInfo: String,
    spotThirdImg: String,
  },
  {
    timestamps: true,
  }
);

const Itinarie =
  mongoose.models.Itinarie || mongoose.model("Itinarie", itinarieSchema);

export default Itinarie;
