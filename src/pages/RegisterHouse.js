import RegisterHouse from "../components/RegisterHouse/RegisterHouse";
const RegisterHousePage = () => {
  const accessToken = localStorage.getItem("accessToken");
  const addHouseHandler = (newHouse) => {
    fetch("http://localhost:3001/houses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        location: newHouse.location,
        address: newHouse.address,
        phoneNumber: newHouse.phoneNumber,
        description: newHouse.description,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <RegisterHouse onAddHouse={addHouseHandler} />
    </>
  );
};

export default RegisterHousePage;
