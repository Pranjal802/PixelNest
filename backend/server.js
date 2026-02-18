import express from "express";// import cors from "cors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import connectdb from "./config/db.js";
import contactRoute from "./routes/contactRoute.js"

const app = express();

app.use(cors());
app.use(express.json());

app.use('/contact', contactRoute)

app.get('/', (req,res) => {
    res.send("Backend is running...")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
    connectdb();
})