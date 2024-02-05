import { Schema, model } from "mongoose";
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
    default:
      "https://i.pinimg.com/564x/47/d9/a5/47d9a50eab1d03567461f8ab852f067a.jpg",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  address: {
    type: String,
    default: "Ulaanbaatar",
  },
  role: {
    type: String,
    enum: ["Admin", "User", "Moderator"],
    default: "User",
  },
  otp: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.pre("save", async function async() {
  if (this.isModified(this.password)) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = model("User", userSchema);

export default User;
