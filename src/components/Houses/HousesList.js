import HouseItem from "./HouseItem";
const HousesList = (props) => {
  return (
    <>
      {props.houses.map((house) => (
        <HouseItem
          key={house.id}
          location={house.location}
          phoneNumber={house.phoneNumber}
          address={house.address}
          description={house.description}
        />
      ))}
    </>
  );
};

export default HousesList;
