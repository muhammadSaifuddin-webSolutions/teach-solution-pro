const catchAsyncError = require("../middleware/catchAsyncError");
const RoomType = require("../models/roomType");
const ErrorHandler = require("../utils/errorHandler");

exports.createRoomType = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const { title, description } = data;
  const task = await RoomType.create({ title, description });
  res.status(201).json({
    success: true,
    message: "Room Type Created successfully",
    task
  });
});

exports.updateRoomType = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  const updates = {};

  updates.title = title;
  updates.description = description;

  const updated = await RoomType.findByIdAndUpdate(id, updates, { new: true });

    res.status(201).json({
    success: true,
    message: "Room Type Updated successfully",
    updated
  });
});

exports.deleteRoomType = catchAsyncError(async (req, res, next) => {
  const roomType = await RoomType.findById(req.params.id);
  if (!roomType) {
    return next(new ErrorHandler("Room Type not found", 404));
  }
  
  res.status(201).json({
    success: true,
    message: "Room Type deleted successfully",
  });
});

exports.getRoomType= catchAsyncError(async (req, res, next) => {
  const allRoomTypes = await RoomType.find()
console.log("AFE")
  if(allRoomTypes?.length <= 0)
  {
    return next(new ErrorHandler("Room Type not found", 404))
  }

  res.status(201).json({
    success: true,
    allRoomTypes
  });
});


