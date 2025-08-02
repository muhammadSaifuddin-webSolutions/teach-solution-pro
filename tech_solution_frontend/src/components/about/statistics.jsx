export default function Statistics() {
  const stats = [
    { number: "305", label: "Luxury Rooms", suffix: "+" },
    { number: "650", label: "Regular Guests", suffix: "+" },
    { number: "80", label: "Team Member", suffix: "+" },
    { number: "75", label: "Beaches", suffix: "+" },
  ]

  return (
    <div className="py-16 bg-emerald-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
          {stats.map((stat, index) => (
             <div key={index}>
              <div className="text-6xl font-bold mb-2 opacity-80">
                {stat.number}
                {stat.suffix}
              </div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
