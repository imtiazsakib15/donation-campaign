import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [donations, setDonations] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-sm sm:max-w-max 2xl:container mx-auto px-6 sm:px-10 lg:px-20 py-24">
      {donations.map((donation) => (
        <Card key={donation.id} donation={donation} />
      ))}
    </div>
  );
};

export default Cards;
