import express from "express";// import cors from "cors";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config()
import connectdb from "./config/db.js";
import contactRoute from "./routes/contactRoute.js"
import userClientRegister from "./routes/auth/clientRegisterRoute.js"
import userClientLogin from "./routes/auth/clientLoginRoute.js"
import clientEmailVerification from "./routes/auth/clientEmailVerificationRoute.js"
import clientForgotPassword from "./routes/auth/clientForgotPasswordRoute.js"
import clientResetPassword from "./routes/auth/clientResetPasswordRoute.js"

const app = express();

// app.use(cors({
//     origin: "https://pixelnest-delta.vercel.app/",
//     credentials: true,
// }));

const allowedOrigins = [
    "http://localhost:3000",
    "https://pixelnest-delta.vercel.app"
];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true
}));

app.use(express.json());

app.use('/contact', contactRoute) // Contact Us route
app.use('/auth', userClientRegister) // Client register route
app.use('/auth', userClientLogin) // Client login route
app.use('/auth', clientEmailVerification) // Verification route
app.use('/auth', clientForgotPassword) // Forgot password route
app.use('/auth', clientResetPassword) // Reset password route

app.get('/', (req,res) => {
    res.send("Backend is running...")
})


const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0" ,() => {
    console.log(`Server is running on ${PORT}...`);
    connectdb();
})