import { useEffect, useState } from "react";
import axios from "axios";
import HousesList from "../components/Houses/HousesList";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const [houses, setHouses] = useState([]);
  const [accessToken, setAccessToken] = useState(null);

  const curAccessToken = localStorage.getItem("accessToken");

  console.log(curAccessToken);
  if (accessToken != curAccessToken && curAccessToken !== undefined) {
    setAccessToken(curAccessToken);
  }

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

        console.log(result);
      })
      .catch(console.log);
  }, []);

  return (
    <div className={classes.main}>
      {accessToken && <HousesList houses={houses} />}
      {!accessToken && (
        <div className={classes.error}>
          <h1>You have not logged in yet</h1>
        </div>
      )}
    </div>
  );
};

export default HomePage;
