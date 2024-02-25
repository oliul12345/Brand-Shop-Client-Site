import { Outlet } from "react-router-dom";
import Header from "../Comphonents/Header/Header";
import Footer from "../Comphonents/Header/Footer/Footer";

const Layout = () => {
  return (
    <div>
        <div className="max-w-6xl mx-auto">
        <Header></Header>
        <Outlet></Outlet>
        </div>
    
      <Footer></Footer>
    </div>
  );
};

export default Layout;
