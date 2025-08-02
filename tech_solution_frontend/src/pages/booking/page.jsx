import Header from "../../components/global/header"
import HeroSection from "../../components/global/hero-section"
import Footer from "../../components/global/footer"
import BookingForm from "../../components/booking/booking-form"
import LuxuryRooms from "../../components/booking/luxury-rooms"
import { getRoomType } from "../../actions/roomType"
import { getRooms } from "../../actions/hotelRooms"
import { useEffect, useState } from "react"
export default function BookingPage() {
  
  const [typeData, setTypeData] = useState();
  const [roomData, setRoomData] = useState();
    useEffect(() => {
      getDropdownDetails();
    }, []);
  
    const getDropdownDetails = async () => {
      const roomType = await getRoomType();
      const rooms = await getRooms();
      console.log(roomType, rooms);
  
      const res = roomType?.allRoomTypes?.map((item) => {
        return {
          label: item.title,
          value: item._id,
        };
      });
      setTypeData(res);
  
      const res2 = rooms?.map((item) => {
        return {
          label: item.roomTitle,
          value: item._id,
        };
      });
      setRoomData(res2);
    };
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection title="Booking" breadcrumb="Booking" />
      <BookingForm typeData={typeData} roomData={roomData}/>
      <LuxuryRooms />
      {/* <WhyChoose />
      <VideoSection /> */}
      <Footer />
    </div>
  )
}
