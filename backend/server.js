import express from "express";// import cors from "cors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import connectdb from "./config/db.js";
import contactRoute from "./routes/contactRoute.js"
import userClientRegister from "./routes/auth/clientRegisterRoute.js"
import userClientLogin from "./routes/auth/clientLoginRoute.js"
import clientEmailVerification from "./routes/auth/clientEmailVerificationRoute.js"

const app = express();

app.use(cors({
    origin: "https://pixelnest-delta.vercel.app",
}));

app.use(express.json());

app.use('/contact', contactRoute) // Contact Us route
app.use('/auth', userClientRegister) // Client register route
app.use('/auth', userClientLogin) // Client login route
app.use('/auth', clientEmailVerification) // Verification route

app.get('/', (req,res) => {
    res.send("Backend is running...")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}...`);
    connectdb();
})