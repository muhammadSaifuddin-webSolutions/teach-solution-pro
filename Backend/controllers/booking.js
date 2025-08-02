const catchAsyncError = require("../middleware/catchAsyncError");
const Booking = require("../models/booking");
const ErrorHandler = require("../utils/errorHandler");

exports.createBooking = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const {
    firstName,
    lastName,
    email,
    phoneNo,
    roomType,
    room,
    checkIn,
    checkOut,
  } = data;
  const task = await Booking.create({
    firstName,
    lastName,
    email,
    phoneNo,
    roomType,
    room,
    checkIn,
    checkOut,
  });
  res.status(201).json({
    success: true,
    message: "Booking Created Successfully!",
    task,
  });
});

exports.updateBooking = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { 
    firstName,
    lastName,
    email,
    phoneNo,
    roomType,
    room,
    checkIn,
    checkOut, } = req.body;
  const updates = {};


    updates.firstName = firstName;
    updates.lastName = lastName;
    updates.email = email;
    updates.phoneNo = phoneNo;
    updates.roomType = roomType;
    updates.room = room;
    updates.checkIn = checkIn;
    updates.checkOut = checkOut;
  const updated = await Booking.findByIdAndUpdate(id, updates, { new: true });

  if(!updated)
  {
    return next(new ErrorHandler("Booking not found & updated"))
  }
   res.status(201).json({
    success: true,
    message: "Booking updated Successfully!",
    updated,
  });
});

exports.deleteBooking = catchAsyncError(async (req, res, next) => {
  const booking = await Booking.findById(req.params.id);
  if (!booking) {
    return next(new ErrorHandler("Booking not found", 404));
  }

  res.status(204).json({
    success: true,
    message: "Booking deleted successfully",
  });
});

exports.getBooking = catchAsyncError(async (req, res, next) => {
  const allBookings = await Booking.find()

  if(allBookings <= 0)
  {
    return next(new ErrorHandler("No Record found for Bookings", 404))
  }
  res.status(204).json({
    success: true,
    message: "Record get Successfully!",
  });
});