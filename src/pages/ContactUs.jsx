function ContactUs() {
  return (
    <>
      <div className="w-full min-h-[300px] bg-gradient-to-br from-slate-900 via-gray-900 to-black flex items-center justify-center">
        <div className="py-16 sm:py-24 w-full">
          <h1 className="font-extrabold text-3xl sm:text-5xl text-center text-white drop-shadow-lg">
            Contact Us
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 flex justify-center items-center m-8">
        <form
          action=""
          className="bg-white/90 backdrop-blur-md text-black rounded-xl shadow-2xl p-6 sm:p-10 w-full max-w-lg space-y-6"
        >
          {/* Name */}
          <div className="flex flex-col">
            <label
              htmlFor="name"
              className="mb-2 font-semibold text-slate-900"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
              placeholder="Enter your name"
              autoComplete="name"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="mb-2 font-semibold text-slate-900"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
              placeholder="Enter your email"
              autoComplete="email"
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="mb-2 font-semibold text-slate-900"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 transition"
              placeholder="Enter your phone number"
              autoComplete="tel"
            />
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="mb-2 font-semibold text-slate-900"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none transition"
              placeholder="Write your message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-slate-900 to-gray-700 text-white font-bold py-3 rounded-lg hover:bg-slate-800 hover:scale-[1.03] transition duration-300 shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactUs;
