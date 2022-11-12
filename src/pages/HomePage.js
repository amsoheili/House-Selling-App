import { useEffect, useState } from "react";
import axios from "axios";
import HousesList from "../components/Houses/HousesList";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [houses, setHouses] = useState([]);
  const accessToken = localStorage.getItem("accessToken");
  useEffect(() => {
    fetch("http://localhost:3001/houses", {
      headers: { Authorization: `Bearer ${accessToken}` },
    })
      .then((res) => {
        if (res.status !== 200) {
          throw new Error(`not authorized`);
        }
        console.log(res.status);
        return res.json();
      })
      .then((result) => {
        setHouses(result);

        // console.log(result);
      })
      .catch(console.log);
  }, []);

  return (
    <div className={classes.main}>
      <HousesList houses={houses} />
    </div>
  );
};

export default HomePage;
