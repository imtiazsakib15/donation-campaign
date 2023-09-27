import { PropTypes } from "prop-types";
import "./Banner.css";

const Banner = ({ handleSearch, searchRef }) => {
  return (
    <div className="banner">
      <div className=" bg-[#fffffff0] text-center h-[80vh] flex flex-col justify-center items-center">
        <h3 className="text-2xl md:text-5xl font-bold w-2/3">
          I Grow By Helping People In Need
        </h3>
        <form onSubmit={handleSearch} className="mt-10 mx-1">
          <input
            ref={searchRef}
            className="px-4 py-2 leading-snug border rounded-l-lg"
            type="text"
            name="search"
            placeholder="Search here...."
          />
          <input
            className="px-4 py-2.5 leading-tight text-white font-semibold -ml-1 border-red-500 rounded-r-lg bg-red-500 cursor-pointer"
            type="submit"
            value="Search"
          />
        </form>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleSearch: PropTypes.func,
  searchRef: PropTypes.object  ,
};

export default Banner;
