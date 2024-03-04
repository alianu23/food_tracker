import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const orderSchema = new Schema({
  orderNo: String,
  payment: {
    paymentAmount: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["Paid", "Unpaid"],
      default: "Unpaid",
    },
    method: {
      type: String,
      enum: ["Cash", "Card", "Qpay"],
      default: "Cash",
    },
    paidDate: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  address: {
    khoroo: { type: String },
    duureg: { type: String },
    buildingNo: { type: String },
    info: String,
  },
  delivery: {
    status: {
      type: String,
      enum: ["Pending", "Progressing", "Delivered"],
      default: "Pending",
    },
    deliveredAt: {
      type: Date,
      default: Date.now,
    },
  },
});

const userSchema = new Schema(
  {
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
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8fDA%3D",
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
      enum: ["superAdmin", "User", "Admin"],
      default: "User",
    },
    status: {
      type: String,
      enum: ["Active", "Banned"],
      default: "Active",
    },
    otp: {
      type: String,
      default: "",
    },
    phone: String,
    orders: [orderSchema],
  },
  { timestamps: true }
);

// userSchema.pre("save", async function async() {
//   if (this.isModified(this.password)) {
//     const salt = await bcrypt.genSalt(10);
//     this.password = await bcrypt.hash(this.password, salt);
//   }
// });

const User = model("User", userSchema);

export default User;
