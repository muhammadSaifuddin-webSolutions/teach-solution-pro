export default function VideoSection() {
  return (
    <div className="py-20 bg-emerald-600">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full mb-4">
          <p className="text-emerald-600 text-sm font-medium tracking-wider">AMAZING EXPERIENCE</p>
        </div>
        <h2 className="text-4xl font-bold text-white mb-16 leading-tight">
          Relax And Enjoy With Our
          <br />
          Hotel & Resort
        </h2>

        <div className="flex justify-center">
          <button className="w-20 h-20 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg">
            <div className="w-0 h-0 border-l-[16px] border-l-emerald-600 border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
          </button>
        </div>
      </div>
    </div>
  )
}
