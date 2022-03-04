const mongoose = require("mongoose");
// require("dotenv").config();

// db name= moeDB

async function connect() {
  const dbUser = process.env.DB_USER;
  const dbPass = process.env.DB_PASS;
  const dbAtlasURL = process.env.MONGO_ATLAS_URL;
  const dbName = process.env.DB_NAME;

  const connectionString =
    `mongodb+srv://${dbUser}:${dbPass}@${dbAtlasURL}/${dbName}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("Error Connecting to MongoDB! Exiting...");
    process.exit(1);
  }
}

module.exports.connect = connect;
