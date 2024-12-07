import mongoose, { Schema, model, models, Document } from 'mongoose';

interface IContact extends Document {
  title: string;
  content: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = models.Contact || model<IContact>('Contact', ContactSchema);

export default Contact;
