import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import AppLayout from "./components/layouts/AppLayout/index.tsx";
import "@/globals.css";
import Home from "./components/pages/home/index.tsx";
import UpcomingMeetings from "./components/pages/upcoming-meetings/index.tsx";
import ArchivedMeetings from "./components/pages/archived-meetings/index.tsx";
import MeetingPage from "./components/pages/meeting/index.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path={"/"} element={<Home />}></Route>
        <Route
          path={"/upcoming-meetings"}
          element={<UpcomingMeetings />}
        ></Route>
        <Route
          path={"/archived-meetings"}
          element={<ArchivedMeetings />}
        ></Route>
        <Route path="/meeting/:meetingId" element={<MeetingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
