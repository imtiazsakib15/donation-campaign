import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DonationDetails = () => {
  const [donations, setDonations] = useState([]);
  const { donationId } = useParams();

  useEffect(() => {
    fetch("./../data.json")
      .then((res) => res.json())
      .then((data) => setDonations(data));
  }, []);
  
  const donationDetail = donations.find(
    (donation) => donation.id === parseInt(donationId)
  );

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 pt-8 my-28">
      <div className="relative">
        <img
          className="w-full max-h-[800px] rounded-lg"
          src={donationDetail?.picture}
          alt={donationDetail?.title}
        />
        <div className="absolute bottom-0 w-full bg-[#0B0B0B90] p-10 rounded-b-lg">
          <button className="text-white text-lg font-semibold bg-red-500 px-5 py-3 rounded">
            Donate ${donationDetail?.price}
          </button>
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-14">{donationDetail?.title}</h2>
      <p className="mt-6">{donationDetail?.description}</p>
    </div>
  );
};

export default DonationDetails;
