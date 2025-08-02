import { useEffect, useState } from "react"
import { getExpertStaff } from "../../actions/expertStaff"

export default function ExpertStaff() {
  const staff = [
    {
      name: "Michael Dean",
      role: "Chef Master",
      image: "https://media.gettyimages.com/id/1321409713/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=gi&k=20&c=UnAI59fsKc2u1xgQ1iDoo2AEI3Bf2O6Dn9y-TQzfl6s=",
    },
    {
      name: "Arnold Taylor",
      role: "Room Cleaner",
      image: "https://media.gettyimages.com/id/1321409713/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=gi&k=20&c=UnAI59fsKc2u1xgQ1iDoo2AEI3Bf2O6Dn9y-TQzfl6s=",
    },
    {
      name: "Michael Dean",
      role: "Assistant Chef",
      image: "https://media.gettyimages.com/id/1321409713/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=gi&k=20&c=UnAI59fsKc2u1xgQ1iDoo2AEI3Bf2O6Dn9y-TQzfl6s=",
    },
    {
      name: "Michael Dean",
      role: "Supervisor",
      image: "https://media.gettyimages.com/id/1321409713/photo/portrait-of-a-confident-young-businessman-working-in-a-modern-office.jpg?s=612x612&w=gi&k=20&c=UnAI59fsKc2u1xgQ1iDoo2AEI3Bf2O6Dn9y-TQzfl6s=",
    },
  ]
  const [data, setData] = useState([])

  useEffect(()=>{
    getStaffDetails()
  }, [])

  const getStaffDetails =async() =>{
    const res = await getExpertStaff()
    console.log(res)
    if(res?.length > 0)
    {
      setData(res)
    }else{
      setData(staff)
    }
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">

          <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full mb-4"><p className="text-emerald-600 text-sm font-medium mb-2 tracking-wider">FIXYLAND STAFF</p></div>
         
          <h2 className="text-4xl font-bold text-gray-800">Expert Staff Persons</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data?.map((member, index) => (
            <div key={index} className="text-center bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-64 object-cover" />
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-light">+</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-1">{member.name}</h3>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-8 h-px bg-gray-400"></div>
                  <p className="text-gray-500 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
