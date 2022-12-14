import { Card } from "@mui/material";
import classes from "./HouseItem.module.css";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const HouseItem = (props) => {
  const center = [51.505, -0.09];
  const location = props.location;
  console.log(props.location);
  return (
    <>
      <Card className={classes.card}>
        <div className={classes.location}>
          <MapContainer
            center={[location.lat, location.lng]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[location.lat, location.lng]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className={classes.info}>
          <div className={classes.content}>
            <div>Address:</div>
            <div>{props.address}</div>
          </div>
          <div className={classes.content}>
            <div>Phone Number:</div>
            <div>{props.phoneNumber}</div>
          </div>
          <div className={classes.content}>
            <div>Description:</div>
            <div>{props.description}</div>
          </div>
        </div>
      </Card>
    </>
  );
};
export default HouseItem;
