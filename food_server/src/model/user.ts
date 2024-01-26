import { Schema, model } from "mongoose";
import { hashSync } from "bcrypt";
import bcrypt from "bcrypt";

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Нэрээ заавал оруулна уу"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "И-мэйл хаяг заавал оруулна уу"],
  },
  password: {
    type: String,
    required: [true, "Нууц үгээ заавал оруулна уу"],
    minlength: 6,
    select: false,
  },
  avatarUrl: {
    type: String,
  },
  address: {
    khoroo: { type: String },
    duureg: { type: String },
    noBuilding: { type: Number },
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Moderator"],
    default: "User",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = model("User", userSchema);

export default User;
