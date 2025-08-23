import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import TempNavbar from "../components/TempNavbar";

function AppLayout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default AppLayout;
