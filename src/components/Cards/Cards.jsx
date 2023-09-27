import { useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import Card from "../Card/Card";

const Cards = ({ searchCategory }) => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  let displayDonations = donations.filter((donation) => {
    if (searchCategory === "") return;
    return donation.category
      .toLowerCase()
      .includes(searchCategory.toLowerCase());
  });
  if (displayDonations.length === 0) displayDonations = [...donations];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 2xl:container mx-auto px-6 sm:px-10 lg:px-20 py-24">
      {displayDonations.map((donation) => (
        <Card key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

Cards.propTypes = {
  searchCategory: PropTypes.string,
};

export default Cards;
