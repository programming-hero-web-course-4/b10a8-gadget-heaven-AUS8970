import { Outlet } from "react-router-dom";
// import Footer from "../components/Footer";
import Navber from "../components/Navber";
// import Home from "../pages/Home";

const Layouts = () => {
  return (
    <div className="w-11/12 m-auto">
      <Navber />
      <div className="">
        <Outlet/>
        {/* <Home/> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Layouts;