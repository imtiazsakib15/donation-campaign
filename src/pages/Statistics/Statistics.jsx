import { Chart } from "react-google-charts";
import { getFromLS } from "../../utility/localStorage";
import { useEffect, useState } from "react";

const Statistics = () => {
  const [total, setTotal] = useState();
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setTotal(data.length));
  }, []);

  const yourDonation = getFromLS();
  const yourDonationNumber = yourDonation.length;
  const totalDonation = total - yourDonationNumber;

  const data = [
    ["Task", "Donation Count"],
    ["Your Donation", yourDonationNumber],
    ["Total Donation", totalDonation],
  ];

  return (
    <Chart chartType="PieChart" data={data} width={"100%"} height={"500px"} />
  );
};

export default Statistics;
