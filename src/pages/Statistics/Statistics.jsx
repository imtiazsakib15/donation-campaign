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
  const options = {
    colors: ["#00C49F", "#FF444A"],
    legend: {
      position: "bottom",
    },
  };

  return (
    <Chart
      chartType="PieChart"
      options={options}
      data={data}
      width={"100%"}
      height={"500px"}
    />
  );
};

export default Statistics;
