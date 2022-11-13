import { useState, useRef, useMemo, useCallback } from "react";
import classes from "./DraggableMarker.module.css";
import { Popup, Marker } from "react-leaflet";

const DraggableMarker = (props) => {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  const [draggable, setDraggable] = useState(false);
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          props.setPositionHandler(marker.getLatLng());
          console.log(marker.getLatLng());
        }
      },
    }),
    []
  );
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d);
  }, []);

  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={props.position}
      ref={markerRef}
      className={classes.marker}
    >
      <Popup minWidth={90}>
        <span onClick={toggleDraggable}>
          {draggable
            ? "Marker is draggable"
            : "Click here to make marker draggable"}
        </span>
      </Popup>
    </Marker>
  );
};

export default DraggableMarker;
