import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
const Layout = (props) => {
  return (
    <>
      <Navbar />
      {props.children}
      <Outlet />
    </>
  );
};

export default Layout;
