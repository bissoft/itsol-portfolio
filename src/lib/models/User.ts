import mongoose, { Schema, model, models } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password?: string;
  image?: string;
  role: "SUPERADMIN" | "ADMIN" | "USER";
  status: "pending" | "active" | "suspended";
  invitedBy?: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    image: { type: String },
    role: {
      type: String,
      enum: ["SUPERADMIN", "ADMIN", "USER"],
      default: "ADMIN",
    },
    status: {
      type: String,
      enum: ["pending", "active", "suspended"],
      default: "pending",
    },
    invitedBy: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true },
);

const User = models.User || model("User", UserSchema);

export default User;
