const mongoose = require("mongoose");

const roomsSchema = mongoose.Schema(
  {
    roomTitle: {
      type: String,
      required: [true, "Please Enter Title of the Room"],
      minlength: 3,
      unique: [true, "The room should be unique"],
    },
    roomCode: {
      type: String,
      required: [true, "Please Enter Title of the Code"],
      minlength: 3,
      unique: [true, "The room Code should be unique"],
    },
    description: {
      type: String,
      required: false,
      maxlength: 200,
    },
    price: {
      type: Number,
      required: [true, "Please enter price of the room"],
      maxlength: 200,
    },
    guests: {
      type: Number,
      required: [true, "Please enter the no of guests"],
      maxlength: 200,
    },
    baths: {
      type: Number,
      required: [true, "Please enter the no of baths"],
      maxlength: 200,
    },
    beds: {
      type: Number,
      required: [true, "Please enter the no of beds"],
      maxlength: 200,
    },
    image: {
      type: String,
      required: false,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Rooms", roomsSchema);
