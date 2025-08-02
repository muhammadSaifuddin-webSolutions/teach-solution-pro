const express = require("express");
const cors = require("cors");
const errorMiddleware = require("./middleware/error");
const connectDB = require("./databaseConnection/dbConnection");
const app = express()
require('dotenv').config();

connectDB();

app.use(express.json());

const corsOptions = {
  origin: process.env.BASE_URL_FRONTEND,
//  origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Origin", "Content-Type", "Authorization", "type"],
};

app.use(cors(corsOptions));

app.use("/api/v1/rooms", require("./routes/rooms"));
app.use("/api/v1/roomType", require("./routes/roomType"));
app.use("/api/v1/booking", require("./routes/booking"));
app.use("/api/v1/staff", require("./routes/expertStaff"));


// For Images acess
app.use("/uploads", express.static('uploads'));

app.use(errorMiddleware);

const server = app.listen(process.env.PORT || 4500, function () {
  console.log("Server Started on Port ", process.env.PORT);
});
