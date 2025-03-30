import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout/index.tsx";
import "@/globals.css";
import Hero from "./components/hero/index.tsx";
import Home from "./components/pages/home/index.tsx";
import Meetings from "./components/pages/Meetings/upcoming-meetings.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/upcoming-meetings"} element={<Meetings />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
