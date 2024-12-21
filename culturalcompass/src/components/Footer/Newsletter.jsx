export default function NewsLetter() {
    return (
      <div className="bg-[#3C6C8D] px-6 py-12">
        <div className=" w-full text-white text-center flex flex-col md:flex-row lg:gap-1 md:gap-5 gap-1">
          <div className="md:w-1/2 w-full text-left lg:pl-[6%] md:pl-[5%] pl-[4%]">
                 <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 tracking-wide">
                    Subscribe to our Newsletter
                  </h2>
                  <p className="text-sm sm:text-[14px] max-w-2xl md:text-[1rem] mb-6 md:leading-7 lg:leading-8 leading-5">
                  Discover the wonders of cultural heritage! Stay updated with the latest travel guides, cultural insights, festivals, and unique experiences by subscribing to our newsletter.
                  </p>
          </div>
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-[70%] sm:w-2/3 px-4 md:text-base sm:text-sm text-xs py-4 rounded-l-xl focus:outline-none placeholder:text-white text-white bg-[#FCFCFC1A]"
            />
            <button className="bg-white md:text-base sm:text-sm text-xs text-black font-semibold md:px-6 px-4 lg:px-7 py-4 rounded-r-xl hover:bg-gray-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    );
  }
  