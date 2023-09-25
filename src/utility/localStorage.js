const getFromLS = () => {
  const donations = localStorage.getItem("donationIds");
  if (donations) {
    const donationsJson = JSON.parse(donations);
    //   console.log(donationsJson);
    return donationsJson;
  }
  return [];
};

const addToLS = (id) => {
  let storedIds = getFromLS();

  if (storedIds.find((storedId) => storedId === id)) return;

  storedIds.push(id);
  let storedIdsStr = JSON.stringify(storedIds);
  localStorage.setItem("donationIds", storedIdsStr);
};

export { addToLS, getFromLS };
