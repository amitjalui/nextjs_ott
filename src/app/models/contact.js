import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    }, 
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true,
  }
);

const Contact = mongooose.models.Contact || mongoose.model('Contact', contactSchema);