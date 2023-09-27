import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addToLS } from "./../../utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const handleDonation = (id) => {
    addToLS(id);
    toast.success("Donated Successfully!", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <div className="container mx-auto px-6 sm:px-10 lg:px-20 pt-8 mb-28">
      <div className="relative">
        <img
          className="w-full max-h-[800px] rounded-lg"
          src={donationDetail?.picture}
          alt={donationDetail?.title}
        />
        <div className="absolute bottom-0 w-full bg-[#0B0B0B90] p-10 rounded-b-lg">
          <button
            onClick={() => handleDonation(donationDetail?.id)}
            style={{ backgroundColor: `${donationDetail?.text_button_bg}` }}
            className="text-white text-lg font-semibold px-5 py-3 rounded"
          >
            Donate ${donationDetail?.price}
          </button>
          <ToastContainer />
        </div>
      </div>
      <h2 className="text-4xl font-bold mt-14">{donationDetail?.title}</h2>
      <p className="mt-6">{donationDetail?.description}</p>
    </div>
  );
};

export default DonationDetails;
