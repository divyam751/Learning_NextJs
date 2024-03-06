import mongoose from "mongoose";

export default async () => {
  try {
    const DB_OPTIONS = {
      dbName: process.env.DBNAME,
      user: process.env.DBUSERNAME,
      pass: process.env.DBPASSWORD,
      authSource: process.env.DBAUTHSOURCE,
    };
    await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully...");
  } catch (error) {
    console.log(error);
  }
};
