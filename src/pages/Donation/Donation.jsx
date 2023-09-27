import { getFromLS } from "./../../utility/localStorage";
import Card from "../../components/Card/Card";
import { useEffect, useState } from "react";

const Donation = () => {
  const [donations, setDonations] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);

  const donatedIds = getFromLS();

  const myDonations = donations.filter((donation) =>
    donatedIds.includes(donation.id)
  );
  let displayDonations;
  if (myDonations.length === 0) displayDonations = [];
  else if (myDonations.length > 4 && !showAll)
    displayDonations = myDonations.slice(0, 4);
  else displayDonations = [...myDonations];
  
  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {displayDonations.map((donation) => (
          <Card key={donation.id} donation={donation} myDonation={true} />
        ))}
      </div>
      {myDonations.length > 4 && (
        <div className="text-center my-10">
          <button
            onClick={() => setShowAll(true)}
            className={`bg-[#009444] text-white font-semibold px-6 py-3 rounded-lg ${
              showAll ? "hidden" : ""
            }`}
          >
            See All
          </button>
          <button
            onClick={() => setShowAll(false)}
            className={`bg-[#009444] text-white font-semibold px-6 py-3 rounded-lg ${
              showAll ? "" : "hidden"
            }`}
          >
            See Less
          </button>
        </div>
      )}
    </div>
  );
};

export default Donation;
