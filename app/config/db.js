import mongoose from "mongoose";

const connection = {
  isConnected: false,
};

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  try {
    const db = await mongoose.connect(process.env.DATABASE_KEY, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to the database");
    connection.isConnected = db.connections[0].readyState === 1;
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

export default dbConnect;
