const mongoose = require("mongoose");
const validator = require("validator");

const bookingSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "Please Enter First Name"],
    },
    lastName: {
      type: String,
      required: [true, "Please Enter Last Name"],
    },
    email: {
      type: String,
      required: [true, "Please Enter Email"],
      validate: {
        validator: validator.isEmail,
        message: "Please provide a valid Email",
      },
      unique: true,
      index: true, 
    },
    phoneNo: {
      type: String,
      required: [true, "Please Enter Phone No"],
    },
    roomType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RoomType",
      required: [true, "Please Enter Room Type"],
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Rooms",
      required: [true, "Please Enter Room"],
    },
    checkIn: {
      type: Date,
      required: [true, "Please Enter Check In Time"],
    },
    checkOut: {
      type: Date,
      required: [true, "Please Enter Check Out Time"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Booking", bookingSchema);
