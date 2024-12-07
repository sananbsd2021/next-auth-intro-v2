// models/User.ts
import { Schema, model, models, Model } from 'mongoose';

interface IUser {
  name: string;
  email: string;
  age: number;
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
});

const User: Model<IUser> = models.User || model<IUser>('User', userSchema);

export default User;

