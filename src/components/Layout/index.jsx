import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="bg-dark text-light">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
