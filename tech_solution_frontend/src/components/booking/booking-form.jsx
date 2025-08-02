import { useEffect, useState } from "react";
import TextInput from "../FormInputs/TextInput";
import { useForm, useFieldArray } from "react-hook-form";
import FormSelectInput from "../FormInputs/FormSelectInput";
import TextArea from "../FormInputs/TextAreaInput";
import { getRoomType } from "../../actions/roomType";
import { getRooms } from "../../actions/hotelRooms";
import { createBooking } from "../../actions/booking";
export default function BookingForm({typeData, roomData}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });
  const [selectedType, setSelectedType] = useState();
  const [selectedRoom, setSelectedRoom] = useState();

  const type = [
    {
      label: "Family Room",
      value: "Family Room",
    },
    {
      label: "GAP",
      value: "GAP",
    },
    {
      label: "R/C",
      value: "R/C",
    },
  ];

  const room = [
    {
      label: "Family Room",
      value: "Family Room",
    },
    {
      label: "GAP",
      value: "GAP",
    },
    {
      label: "R/C",
      value: "R/C",
    },
  ];



  async function saveBooking(data) {
    try {
      data.roomType = selectedType?.value;
      data.room = selectedRoom?.value;
      console.log(data);

      const res = await createBooking(data);
      console.log(res);
    } catch (error) {}
  }

  return (
    <div className="py-16 px-20 bg-gray-100 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-emerald-600 text-sm font-medium mb-2">
            STAY WITH US
          </p>
          <h2 className="text-3xl font-bold text-gray-800">
            Make An Appointment
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Form */}
          <div className="lg:col-span-2 p-8 bg-white rounded-lg">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              onSubmit={handleSubmit(saveBooking)}
            >
              <TextInput
                register={register}
                errors={errors}
                label="First Name"
                name="firstName"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Last Name"
                name="lastName"
              />
              <TextInput
                register={register}
                errors={errors}
                type="email"
                label="email"
                name="email"
              />
              <TextInput
                register={register}
                errors={errors}
                label="Phone No"
                name="phoneNo"
              />
              <TextInput
                register={register}
                errors={errors}
                type="date"
                label="Check In"
                name="checkIn"
              />
              <TextInput
                register={register}
                errors={errors}
                type="date"
                label="Check Out"
                name="checkOut"
              />
              <FormSelectInput
                label="Type"
                options={typeData}
                option={selectedType}
                setOption={setSelectedType}
                isSearchable={false}
              />
              <FormSelectInput
                label="Room"
                options={roomData}
                option={selectedRoom}
                setOption={setSelectedRoom}
                isSearchable={false}
              />
              <TextArea
                register={register}
                errors={errors}
                name="description"
              />
              <button className="mt-6 bg-emerald-600 text-white px-8 py-3 rounded hover:bg-emerald-700 transition-colors">
                Book Appointment →
              </button>
            </form>
          </div>

          {/* Contact Card */}
          <div className="bg-emerald-600 flex flex-col items-center justify-center rounded-lg p-6 text-white">
            <div className="mb-6">
              <img
                src="https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg"
                alt="Hotel Room"
                className="w-full h-60 object-cover rounded"
              />
            </div>

            <h3 className="text-2xl font-bold mb-4">(+1) 987 654 3210</h3>
            <p className="text-sm mb-2">Mon-Fri: 7:00 am - 9:00 pm</p>
            <p className="text-sm mb-6">24/7 Service Available</p>

            <button className="bg-yellow-400 text-black px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors">
              Call Us Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
