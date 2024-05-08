import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Header heading={location.pathname.split("/")[1]} />
    </>
  );
};

export default MainLayout;
