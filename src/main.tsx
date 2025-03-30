import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AppLayout />} />
    </Routes>
  </BrowserRouter>
);
