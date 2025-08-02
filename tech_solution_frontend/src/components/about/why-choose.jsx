export default function WhyChoose() {
  const skills = [
    { name: "Service", percentage: 95 },
    { name: "Chef Master", percentage: 85 },
    { name: "Dessert", percentage: 94 },
    { name: "& Beverage", percentage: 90 },
  ];

  return (
    <div className="p-20 bg-white">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="p-16">
            <p className="text-emerald-600 text-sm font-medium mb-2">
              OUR SKILLS
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose for us?
            </h2>
            <p className="text-gray-600 mb-8">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even.
            </p>

            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-emerald-600 font-medium">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-emerald-600 h-2 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Images */}
          <div className="relative">
            {/* Main large image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                alt="Beach Resort"
                className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
              />
            </div>

            {/* Overlaid smaller image */}
            <div className="absolute -bottom-8 -left-8 w-48 h-32">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
                alt="Pool Deck"
                className="rounded-xl shadow-xl w-full h-full object-cover border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
