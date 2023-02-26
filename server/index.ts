import { Nitro } from "nitropack";
import mongoose from "mongoose";

export default async (_nitroApp: Nitro) => {
  const config = useRuntimeConfig();

  try {
    await mongoose.connect(config.mongodbUri);
  } catch (e) {
    console.log("Error connecting to MongoDB: ", e);
    process.exit(1);
  }
};
