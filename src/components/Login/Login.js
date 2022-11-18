import { useState, useEffect } from "react";

import classes from "./Login.module.css";
import useInput from "../../hooks/use-input";

const Login = (props) => {
  const [isUsernameRepeated, setIsUsernameRepeated] = useState(false);

  const {
    value: enteredUsername,
    hasError: usernameInputHasError,
    isValid: enteredUsernameIsValid,
    valueChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
    reset: resetUsernameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    hasError: passwordInputHasError,
    isValid: enteredPasswordIsValid,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordHandler,
  } = useInput((value) => value.trim() !== "");

  //   useEffect(() => {
  //     const timeOut = setTimeout(async () => {
  //       const result = await props.onIsUsernameUsed(enteredUsername);
  //       console.log(result);
  //       setIsUsernameRepeated(result);
  //     }, 100);
  //     return () => {
  //       clearTimeout(timeOut);
  //     };
  //   }, [enteredUsername]);

  let formIsValid = false;
  if (enteredUsernameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  }

  const resetValues = () => {
    resetUsernameHandler();
    resetPasswordHandler();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid && isUsernameRepeated) {
      return;
    }
    console.log(enteredUsername);
    console.log(enteredPassword);
    // SignInUser(dispatch, {
    //   username: enteredUsername,
    //   password: enteredPassword,
    // });
    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: enteredUsername,
        password: enteredPassword,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.accessToken);
        if (data !== undefined) {
          localStorage.setItem("accessToken", data.accessToken);
        }
      });

    // SignInUser(dispatch, username);
    resetValues();

    // router.push(`/products`);
  };

  return (
    <div className={classes.login}>
      <div className={classes["form-container"]}>
        <h1>Login</h1>
        <form onSubmit={formSubmitHandler}>
          <div className={classes.username}>
            {/* <label htmlFor="username">Username</label> */}
            <input
              name="email"
              type="text"
              placeholder="Email"
              value={enteredUsername}
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
            />
            <div className={classes.hasError}>
              {usernameInputHasError && "Enter a valid username \n"}
              {!isUsernameRepeated && "There are no such username"}
            </div>
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              name="password"
              type="password"
              placeholder="Password"
              value={enteredPassword}
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
            />
            <div className={classes.hasError}>
              {passwordInputHasError && "Enter a valid password"}
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

export default Login;
