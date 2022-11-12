import classes from "./Navbar.module.css";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
  return (
    <AppBar className={classes.appbar}>
      <div className={classes.links}>
        <Link to="/">
          <Button className={classes.btn}>Home</Button>
        </Link>
        <Link to="/login">
          <Button className={classes.btn}>Login</Button>
        </Link>
        <Link to="/sign-up">
          <Button className={classes.btn}>SignUp</Button>
        </Link>
        <Link to="/register-house">
          <Button className={classes.btn}>Register House</Button>
        </Link>
      </div>
    </AppBar>
  );
};

export default Navbar;
