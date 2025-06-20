import express from "express";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

connectDB();
app.use(cors({ origin: "http://localhost:5173" }));

//middleware
app.use(express.json()); //json body parsor :req.body

//simple custom middlewware
// app.use((req, res, next) => {
//   console.log(`Req Method is ${req.method} and Req Url is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
