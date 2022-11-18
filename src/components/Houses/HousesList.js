import HouseItem from "./HouseItem";
import { Link, Routes, Route, useParams, useMatch } from "react-router-dom";
import ExtendedHouseItem from "./ExtendedHouseItem";
const HousesList = (props) => {
  // let { path, url } = useMatch();

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

      {/* <Routes>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:houseId`}>
          <ExtendedHouseItem />
        </Route>
      </Routes> */}
    </>
  );
};

export default HousesList;
