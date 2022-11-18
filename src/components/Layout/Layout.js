import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import classes from "./Layout.module.css";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div className={classes.children}>{props.children}</div>
      <Outlet />
    </>
  );
};

export default Layout;
