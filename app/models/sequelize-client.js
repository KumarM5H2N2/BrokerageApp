
import { Sequelize } from "sequelize";
import dotenv from "dotenv";

//Load environment variables from the .env file
dotenv.config();

//View PG_URL to debug
console.log("PG_URL:", process.env.PG_URL);

// Vérifier que PG_URL est bien définie
if (!process.env.PG_URL) {
  throw new Error("PG_URL is not defined in the environment variables.");
}

// Initialize Sequelize with the login URL
export const sequelize = new Sequelize(process.env.PG_URL, {
  logging: false, // Log SQL queries passed by Sequelize
  define: {
    createdAt: "created_at", // To say that our field 'createdAt' is called in our database 'created_at'
    updatedAt: "updated_at"
  }
});
