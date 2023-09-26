import { useLoaderData } from "react-router-dom";
import { getFromLS } from "./../../utility/localStorage";
import Card from "../../components/Card/Card";

const Donation = () => {
  const donations = useLoaderData();
  const donatedIds = getFromLS();

  const myDonations = donations.filter((donation) =>
    donatedIds.includes(donation.id)
  );

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 py-8">
      <div className="grid lg:grid-cols-2 gap-6">
        {myDonations.map((donation) => (
          <Card key={donation.id} donation={donation} myDonation={true} />
        ))}
      </div>
    </div>
  );
};

export default Donation;
