import classes from "./RegisterHouse.module.css";
import useInput from "../../hooks/use-input";
import { useEffect } from "react";
import { useState } from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import DraggableMarker from "./DraggableMarker";
// import { Marker } from "https://cdn.esm.sh/react-leaflet";

// import { Marker } from "leaflet";
const RegisterHouse = (props) => {
  const [isUsernameRepeated, setIsUsernameRepeated] = useState(false);
  const [position, setPosition] = useState({
    lat: 35.71543738862901,
    lng: 51.22392654418946,
  });

  const {
    value: enteredPhoneNumber,
    hasError: phoneNumberInputHasError,
    isValid: enteredPhoneNumberIsValid,
    valueChangeHandler: phoneNumberChangeHandler,
    inputBlurHandler: phoneNumberBlurHandler,
    reset: resetPhoneNumberHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredAddress,
    hasError: addressInputHasError,
    isValid: enteredAddressIsValid,
    valueChangeHandler: addressChangeHandler,
    inputBlurHandler: addressBlurHandler,
    reset: resetAddressHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDescription,
    hasError: descriptionInputHasError,
    isValid: enteredDescriptionIsValid,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionHandler,
  } = useInput((value) => value.trim() !== "");

  // useEffect(() => {
  //   const timeOut = setTimeout(async () => {
  //   const result = await isUsernameUsed(enteredUsername);
  //     console.log(result);
  //     setIsUsernameRepeated(result);
  //   }, 100);
  //   return () => {
  //     clearTimeout(timeOut);
  //   };
  // }, [enteredUsername]);

  let formIsValid = false;
  if (
    enteredPhoneNumberIsValid &&
    enteredAddressIsValid &&
    enteredDescriptionIsValid
  ) {
    formIsValid = true;
  }

  const resetValues = () => {
    resetPhoneNumberHandler();
    resetAddressHandler();
    resetDescriptionHandler();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (!formIsValid) {
      return;
    }
    const newHouse = {
      location: position,
      phoneNumber: enteredPhoneNumber,
      address: enteredAddress,
      description: enteredDescription,
    };

    //   props.onAddUser(newUser);
    resetValues();
  };

  const setPositionHandler = (selectedPosition) => {
    setPosition(selectedPosition);
  };
  return (
    <div className={classes["sign-up"]}>
      <div className={classes["form-container"]}>
        <h1>Register House</h1>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.location}>
            <MapContainer
              center={[position.lat, position.lng]}
              zoom={13}
              scrollWheelZoom={false}
              className={classes.map}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <DraggableMarker
                setPositionHandler={setPositionHandler}
                position={position}
              />
            </MapContainer>
          </div>
          <div>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Phone Number"
              value={enteredPhoneNumber}
              onChange={phoneNumberChangeHandler}
              onBlur={phoneNumberBlurHandler}
            />
            <div className={classes.hasError}>
              {!enteredPhoneNumberIsValid && "Enter a valid phone number"}
            </div>
          </div>
          <div>
            <input
              name="Address"
              type="text"
              placeholder="Address"
              value={enteredAddress}
              onChange={addressChangeHandler}
              onBlur={addressBlurHandler}
            />
            <div className={classes.hasError}>
              {!enteredAddressIsValid && "Enter a valid address"}
            </div>
          </div>
          <div>
            <input
              name="Description"
              type="text"
              placeholder="Description"
              value={enteredDescription}
              onChange={descriptionChangeHandler}
              onBlur={descriptionBlurHandler}
            />
            <div className={classes.hasError}>
              {!enteredDescriptionIsValid && "Enter a valid description"}
            </div>
          </div>
          <div className={classes.submit}>
            <button type="submit">Confirm</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterHouse;
