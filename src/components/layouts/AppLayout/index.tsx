import { Outlet } from "react-router";
import Header from "../Header";
import Style from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
