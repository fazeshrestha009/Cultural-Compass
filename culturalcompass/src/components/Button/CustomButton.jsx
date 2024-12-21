
  
  export default function CustomButton({buttonText} ) {
    return (
      <div className="group border-[3px] p-[2px] border-[#4cb9f2] transition-all ease-linear duration-300 hover:p-0 hover:border-transparent md:w-[139px] sm:w-[109.5px] w-[103px] md:h-[45px] h-[41px]">
      <button
        className="relative flex justify-center items-center md:w-[130px] sm:w-[100px] w-[94px] md:h-[36px] h-[32px] text-black py-[5px] font-medium bg-[#4cb9f2] transition-all ease-linear duration-300"
      >
        <span className="relative block w-full h-full md:text-base text-sm">{buttonText}</span>
  
      </button>
      </div>
    );
  }
  