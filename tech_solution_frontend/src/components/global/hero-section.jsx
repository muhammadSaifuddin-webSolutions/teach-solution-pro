
export default function HeroSection({ title, breadcrumb }) {
  return (
    <div className="relative h-64 bg-gray-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1950&q=80')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-white mb-2">{title}</h1>
        {breadcrumb && (
          <div className="text-white">
            <span>Home</span>
            <span className="mx-2">{">"}</span>
            <span>{breadcrumb}</span>
          </div>
        )}
      </div>
    </div>
  )
}
