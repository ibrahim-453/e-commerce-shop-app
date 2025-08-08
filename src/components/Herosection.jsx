// import { useShop } from "../context/ShopContext";
// import { Navigation } from "swiper/modules";

// import { Swiper, SwiperSlide } from "swiper/react";

// import "swiper/css";
// import "swiper/css/navigation";
// function Herosection() {
//   const { product } = useShop();
//   return (
//     <div className="w-full max-h-[500px] flex justify-center items-center">
//       <Swiper
//         modules={[Navigation]}
//         spaceBetween={50}
//         slidesPerView={1}
//         navigation
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {product.map((items, index) => {
//           return (
//             <SwiperSlide key={index}>
//               <div className="max-w-7xl mx-auto py-20 grid grid-cols-2 grid-rows-1 gap-50 justify-center items-center">
//                 <div className="px-10">
//                  <h1>{items.title}</h1>
//                  <p>{items.description}</p>
//                 </div>
//                 <div>
//                     <img className="w-120 h-100" src={items.images[0]} alt="" />
//                 </div>
//               </div>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </div>
//   );
// }

// export default Herosection;

import { useShop } from "../context/ShopContext";
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

function Herosection() {
  const { product } = useShop();
  
  return (
    <div className="w-full h-[500px] relative bg-">
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        className="h-full"
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        {product.map((items, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 h-full items-center">
                  {/* Text Content */}
                  <div className="text-center lg:text-left space-y-4 lg:space-y-6 px-4 lg:px-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-tight">
                      {items.title}
                    </h1>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-lg lg:max-w-none mx-auto lg:mx-0">
                      {items.description}
                    </p>
                    <div className="pt-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200">
                        Shop Now
                      </button>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl">
                      <img 
                        className="w-full h-64 sm:h-72 lg:h-80 xl:h-96 object-cover rounded-lg shadow-lg" 
                        src={items.images[0]} 
                        alt={items.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        
        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev after:content-[''] bg-white hover:bg-gray-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
        
        <div className="swiper-button-next after:content-[''] bg-white hover:bg-gray-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full shadow-lg border border-gray-200 flex items-center justify-center transition-all duration-200">
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </Swiper>
    </div>
  );
}

export default Herosection;