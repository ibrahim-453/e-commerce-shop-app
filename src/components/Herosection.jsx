import heroproduct from "../assets/heroproduct.png";
function Herosection() {
  return (
    <section className="w-full min-h-screen bg-black text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 min-h-[80vh]">
        <div className="flex flex-col items-center lg:items-start space-y-6 sm:space-y-8 text-center lg:text-left max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight">
            Limited Time{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
              Offer
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-lg leading-relaxed">
            Grab the best deals on our premium collection. Don't miss out — shop
            now and elevate your style.
          </p>
          <button className="group px-8 py-4 bg-white text-black rounded-2xl font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 transform">
            <span className="flex items-center gap-2">
              Shop Now
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500"></div>
            <img
              className="relative w-full h-auto max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl object-contain drop-shadow-[0_20px_60px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_25px_70px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-500 rounded-2xl"
              src={heroproduct}
              alt="headphones"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;