const catchAsyncError = require("../middleware/catchAsyncError");
const Staff = require("../models/staff");
const ErrorHandler = require("../utils/errorHandler");

exports.createExpertStaff = catchAsyncError(async (req, res, next) => {
  const data = req.body;
  const photo = req.file;
  const {
    name,
    role,
  } = data;

  const staff = await Staff.create({
  name,
    role,
    image: photo?.path,
  
  });

  
  res.status(201).json({
    success: true,
    message: "Staff Created Successfully",
    staff,
  });
});

exports.updateExpertStaff = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  const { name, role, image } = req.body;
  const updates = {};

  updates.name = name;
  updates.role = role;
  updates.image = image;

  const updated = await Staff.findByIdAndUpdate(id, updates, { new: true });

  if (!updated) {
    return next(new ErrorHandler("Staff not found & updated", 404));
  }

  res.status(201).json({
    success: true,
    message: "Staff updated Successfully",
    updated,
  });
});

exports.deleteStaff = catchAsyncError(async (req, res, next) => {
  const staff = await Staff.findById(req.params.id);
  if (!staff) {
    return next(new ErrorHandler("staff not found", 404));
  }

  res.status(204).send({
    message: "staff deleted successfully",
  });
});

exports.getStaff = catchAsyncError(async (req, res, next) => {
  const allStaff = await Staff.find();

  if (allStaff?.length <= 0) {
    return next(new ErrorHandler("Room not found", 404));
  }
  res.json(allStaff);
});
