import mongoose from "mongoose";

export async function connectDb(mongoUri) {
  if (!mongoUri) throw new Error("MONGODB_URI is required");

  mongoose.set("strictQuery", true);

  await mongoose.connect(mongoUri, {
    serverSelectionTimeoutMS: 8000,
  });

  return mongoose.connection;
}

