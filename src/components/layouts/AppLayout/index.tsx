import { Outlet } from "react-router";
import Header from "../Header";
import Style from "./AppLayout.module.css";
import { Footer } from "../Footer";

export default function AppLayout() {
  return (
    <div className="container">
      <div>
        <Header />
      </div>
      <div className="container">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
}
