import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const RootLayout = ({ onCartShow }) => {
  return (
    <div>
      <Header onCartShow={onCartShow} />
      <Outlet />
      <Footer />
    </div>
  );
};
export default RootLayout;
