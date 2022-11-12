import { Card } from "@mui/material";
import classes from "./HouseItem.module.css";
const HouseItem = (props) => {
  return (
    <>
      <Card className={classes.card}>
        <div className={classes.location}></div>
        <div className={classes.info}>
          <div>Address: {props.address}</div>
          <div>Phone Number: {props.phoneNumber}</div>
          <div>Description: {props.description}</div>
        </div>
      </Card>
    </>
  );
};
export default HouseItem;
