import { useEffect, useState } from "react";
import { getRooms } from "../../actions/hotelRooms";

export default function LuxuryRooms() {
  const rooms = [
    {
      title: "Deluxe Rooms",
      price: "$500 / Night",
      guests: "5 Guests",
      beds: "3 Beds",
      bath: "1 Bath",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      image:
        "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg?height=200&width=300",
    },
    {
      title: "Junior Rooms",
      price: "$400 / Night",
      guests: "3 Guests",
      beds: "2 Beds",
      bath: "1 Bath",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      image:
        "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg?height=200&width=300",
    },
    {
      title: "Family Rooms",
      price: "$600 / Night",
      guests: "2 Guests",
      beds: "3 Beds",
      bath: "1 Bath",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.",
      image:
        "https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg?height=200&width=300",
    },
  ];
  const [data, setData] = useState([]);

  useEffect(() => {
    getRoomsDetails();
  }, []);

  const getRoomsDetails = async () => {
    const res = await getRooms();
    console.log(res);
    if (res?.length > 0) {
      setData(res);
    } else {
      setData(rooms);
    }
  };

  return (
    <div className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white text-sm font-medium mb-2">OUR BEST ROOMS</p>
          <h2 className="text-3xl font-bold text-white">
            Luxury Rooms and Resort
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-20">
          {data?.map((room, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden">
              <div className="relative">
                <img
                  src={room.image || "image"}
                  alt={room.title}
                  className="w-full h-70 object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded text-sm">
                  {room.price}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {room.title}
                </h3>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <span>👥 {room.guests}</span>
                  <span>🛏️ {room.beds}</span>
                  <span>🚿 {room.bath}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6">{room.description}</p>

                <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition-colors">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
