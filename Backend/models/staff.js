const mongoose = require("mongoose");

const staffSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please Enter First Name"],
    },
    role: {
      type: String,
      required: [true, "Please Enter Last Name"],
    },
    image: {
      type: String,
      required: [true, "Please add the image of staff"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("staff", staffSchema);
