const catchAsyncError = require("../middleware/catchAsyncError");
const Rooms = require("../models/rooms");
const ErrorHandler = require("../utils/errorHandler");

exports.createRoom = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const photo = req.file;
  const {
    roomTitle,
    roomCode,
    description,
    price,
    guests,
    baths,
    beds,
  } = data;

  //  rm(photo?.path, () => {
  //       console.log("Photo Deleted");
  //   });
  const room = await Rooms.create({
    roomTitle,
    roomCode,
    description,
    price,
    guests,
    baths,
    beds,
    image: photo?.path,
  });


  console.log(room)
  res.status(201).json({
    success: true,
    message: "Room Created Successfully",
    room,
  });
});

exports.updateRoom = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { roomTitle, roomCode, description } = req.body;
  const updates = {};

  updates.roomTitle = roomTitle;
  updates.roomCode = roomCode;
  updates.description = description;
  updates.price = price;
  updates.guests = guests;
  updates.baths = baths;
  updates.beds = beds;
  updates.image = image;

  const updated = await Rooms.findByIdAndUpdate(id, updates, { new: true });

  if (!updated) {
    return next(new ErrorHandler("Room not found & updated", 404));
  }

  res.status(201).json({
    success: true,
    message: "Room updated Successfully",
    updated,
  });
});

exports.deleteRoom = catchAsyncError(async (req, res, next) => {
  const room = await Rooms.findById(req.params.id);
  if (!room) {
    return next(new ErrorHandler("Room not found", 404));
  }

  res.status(204).send({
    message: "Room deleted successfully",
  });
});

exports.getRooms = catchAsyncError(async (req, res, next) => {
  const allRooms = await Rooms.find();

  if (allRooms?.length <= 0) {
    return next(new ErrorHandler("Room not found", 404));
  }
  res.json(allRooms);
});
