// import express from "express";
// import cors from "cors";
// import cookieParser from "cookie-parser";
// import connection from "./db/connection.js"

// const app = express();

// app.use(cors({
//     origin: process.env.CORS_ORIGIN,
//     credentials: true
// }));

// app.use(express.json({ limit: "16kb" }));
// app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static("public"));
// app.use(cookieParser());

// // Routes import
// import userRouter from "./routes/user.routes.js";

// // Routes declaration
// app.use("/api/v1/users", userRouter);
// app.get('/', (req, res) => {
//     res.send('Server is running!'); // Response for root URL
// });

// export { app };



import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// CORS setup
app.use(cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:3000', // Fallback for local development
    credentials: true
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";
import adminRouter from "./routes/admin.routes.js";
import hotelRouter from "./routes/hotel.routes.js";
import airlineRouter from "./routes/airline.routes.js";
import flightRouter from "./routes/flight.routes.js";

// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/admins", adminRouter);
app.use("/api/v1/hotels", hotelRouter);
app.use("/api/v1/airlines", airlineRouter);
app.use("/api/v1/flights", flightRouter);

// Export app
export { app };
