import { useLoaderData } from "react-router-dom";
import { getFromLS } from "./../../utility/localStorage";
import Card from "../../components/Card/Card";
import { useState } from "react";

const Donation = () => {
  const [showAll, setShowAll] = useState(false);

  const donations = useLoaderData();
  const donatedIds = getFromLS();

  const myDonations = donations.filter((donation) =>
    donatedIds.includes(donation.id)
  );
  const myDonationsSlice = myDonations.slice(0, 4);

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {(showAll ? myDonations : myDonationsSlice).map((donation) => (
          <Card key={donation.id} donation={donation} myDonation={true} />
        ))}
      </div>
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
    </div>
  );
};

export default Donation;
