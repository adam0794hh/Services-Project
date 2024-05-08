// Importer les modules nécessaires
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";


const app = express();
dotenv.config();
mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};

// Démarrer le serveur sur le port 3000
app.listen(8000, () => {
    connect();
    console.log('Serveur démarré sur le port 8000');
});