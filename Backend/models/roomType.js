const mongoose = require("mongoose");

const roomTypeSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please Enter Title of the Room Type"],
      minlength: 3,
      unique: [true, "The room type should be unique"], 
      trim: true,   
    },
    description: {
      type: String,
      required: false,
      maxlength: 200,
    },
  },
  {
    timestamps: true,
  }
);

roomTypeSchema.index({ title: 1 }, { unique: true });
module.exports = mongoose.model("RoomType", roomTypeSchema);
