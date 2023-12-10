import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    cnic: { type: Number, required: true }, // Corrected type to "Number"
    phone: { type: String, required: true },
    description: { type: String }
  },
  { timestamps: true }
);

export const userModel =
  mongoose.models?.data || mongoose.model("data", userSchema);
