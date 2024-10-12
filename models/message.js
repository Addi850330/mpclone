import mongoose, { Schema } from "mongoose";

const messageSchema = new Schema(
  {
    askinfo: String,
    clientname: String,
    email: String,
    phone: String,
    business: String,
  },
  {
    timestamps: true,
  }
);

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);

export default Message;
