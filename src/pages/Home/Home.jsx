import { useRef, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Cards from "../../components/Cards/Cards";

const Home = () => {
  const searchRef = useRef(null);
  const [searchCategory, setSearchCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchCategory(searchRef.current.value);
  };

  return (
    <>
      <Banner handleSearch={handleSearch} searchRef={searchRef} />
      <Cards searchCategory={searchCategory} />
    </>
  );
};

export default Home;
