const Banner = () => {
  return (
    <>
      <div className="2xl:container mx-auto bg-[bannerBg] w-full text-center h-[80vh] flex flex-col justify-center items-center">
        <h3 className="text-2xl md:text-5xl font-bold w-2/3">
          I Grow By Helping People In Need
        </h3>
        <div className="mt-10 mx-4">
          <input
            className="px-4 py-2 leading-snug border rounded-l-lg"
            type="text"
            placeholder="Search here...."
          />
          <button className="px-4 py-2.5 leading-tight text-white font-semibold -ml-1 border-red-500 rounded-r-lg bg-red-500">
            Search
          </button>
        </div>
      </div>
      {/* <div className="border"></div> */}
    </>
  );
};

export default Banner;
