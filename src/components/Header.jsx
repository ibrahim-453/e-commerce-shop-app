import { ChevronDown, Menu, Search, ShoppingCart, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [dropdown, setDropdown] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handledropdown = () => {
    setDropdown(!dropdown);
  };

  const handlenavbar = () => {
    setIsOpen(!IsOpen);
  };
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <>
      <div className="sticky top-0 w-full h-auto md:h-16 bg-black text-white py-5 md:py-4">
        <div className="flex flex-wrap justify-around items-center md:gap-2 md:px-2 md:justify-between max-w-7xl mx-auto">
          <div onClick={handlenavbar} className="md:hidden lg:hidden">
            {!IsOpen && ( <Menu size={18} className="hover:text-gray-300"  />)}
          </div>
          <div>
            <h1 className="text-md md:text-xl font-bold">EZ SHOP</h1>
          </div>
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 font-semibold text-md ">
              <li className="duration-300 hover:bg-white px-2 hover:text-black hover:rounded-md">
                <Link to="/">Home</Link>
              </li>
              <li className="duration-300 hover:bg-white px-2 hover:text-black hover:rounded-md">
                <Link to="/about">About</Link>
              </li>
              <li ref={dropdownRef} className="relative group">
                <button
                  onClick={handledropdown}
                  className="flex items-center gap-1 px-2 duration-300 hover:bg-white hover:text-black rounded-md"
                >
                  Products
                  <ChevronDown className="mt-[2px]" />
                </button>

                {dropdown && (
                  <ul className="absolute top-full left-0 mt-1 bg-white text-black rounded-md shadow-lg w-48 z-50">
                    <li onClick={()=> setDropdown(false)} className="w-full text-left px-4 py-2 hover:bg-black hover:text-white duration-200 rounded-t-md">
                      <Link to="/menscollection">Mens Collection</Link>
                    </li>
                    <li onClick={()=> setDropdown(false)} className="w-full text-left px-4 py-2 hover:bg-black hover:text-white duration-200">
                      <Link to="/womencollection">Women Collection</Link>
                    </li>
                    <li onClick={()=> setDropdown(false)} className="w-full text-left px-4 py-2 hover:bg-black hover:text-white duration-200 rounded-b-md">
                      <Link to="/kidcollection">Kids Collection</Link>
                    </li>
                  </ul>
                )}
              </li>

              <li className="duration-300 hover:bg-white px-2 hover:text-black hover:rounded-md">
                <Link to="/contactus">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center bg-white/10 border border-white/20 rounded-full px-3 py-1 w-full max-w-[200px] md:max-w-[240px] duration-300 focus-within:ring-2 focus-within:ring-white">
            <input
              type="text"
              placeholder="Search Products..."
              className="bg-transparent flex-grow outline-none text-white placeholder-white/70 text-sm md:text-base"
            />
            <Search className="text-white size-4 md:size-5 cursor-pointer hover:scale-110 transition-transform duration-200" />
          </div>

          <div className="flex items-center">
            <ShoppingCart className="text-white size-5 md:size-8 " />
          </div>
        </div>
      </div>
      {IsOpen && (
        <div className="fixed inset-0 bg-black text-white z-50 overflow-hidden md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 text-white hover:text-gray-300 duration-200"
          >
            <X size={28} />
          </button>
          <ul className="flex flex-col items-center gap-2 font-semibold text-md pt-16">
            <li onClick={()=>setIsOpen(false)} className="duration-300 hover:bg-white w-full text-center hover:text-black py-2">
              <Link to="/">Home</Link>
            </li>
            <li onClick={()=>setIsOpen(false)}  className="duration-300 hover:bg-white w-full text-center hover:text-black py-2">
              <Link to="/about">About</Link>
            </li>
            <li ref={dropdownRef} className="w-full relative">
              <button
                onClick={handledropdown}
                className="w-full flex justify-center items-center gap-1 py-2 hover:bg-white hover:text-black duration-300"
              >
                Products <ChevronDown className="inline" />
              </button>
              {dropdown && (
                <ul className="bg-white text-black w-full flex flex-col items-center shadow-md">
                  <li onClick={()=>setIsOpen(false)}  className="hover:bg-black/50 hover:text-white w-full py-2 text-center duration-200">
                    <Link to="/menscollection">Mens Collection</Link>
                  </li>
                  <li onClick={()=>setIsOpen(false)}  className="hover:bg-black/50 hover:text-white w-full py-2 text-center duration-200">
                    <Link to="/womencollection">Women Collection</Link>
                  </li>
                  <li onClick={()=>setIsOpen(false)}  className="hover:bg-black/50 hover:text-white w-full py-2 text-center duration-200">
                    <Link to="/kidcollection">Kids Collection</Link>
                  </li>
                </ul>
              )}
            </li>
            <li onClick={()=>setIsOpen(false)}  className="duration-300 hover:bg-white w-full text-center hover:text-black py-2">
              <Link to="/contactus">Contact Us</Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;
