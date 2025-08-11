
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 px-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-xl mb-3 border-b border-gray-700 pb-2">Quick Links</h1>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/">Home</Link>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/about">About</Link>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/">Product</Link>
          <Link className="hover:text-blue-400 transition-colors duration-300" to="/contactus">Contact Us</Link>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-3 border-b border-gray-700 pb-2">Follow Us</h1>
          <ul className="flex flex-col gap-3">
            <li>
              <a className="flex items-center gap-2 hover:text-blue-400 transition-colors duration-300" href="https://www.facebook.com">
                <Facebook size={18} /> Facebook
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-300" href="https://www.instagram.com">
                <Instagram size={18} /> Instagram
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-sky-400 transition-colors duration-300" href="https://www.twitter.com">
                <Twitter size={18} /> Twitter
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="font-bold text-xl mb-3 border-b border-gray-700 pb-2">Contact Us</h1>
          <ul className="flex flex-col gap-3">
            <li className="flex items-center gap-2">
              <MapPin size={18} /> 123 A NY, USA
            </li>
            <li className="flex items-center gap-2">
              <Phone size={18} /> +1 02000300
            </li>
            <li className="flex items-center gap-2">
              <Mail size={18} /> example@gmail.com
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Your Company. All Rights Reserved.
      </div>
    </footer>
  )
}

export default Footer
