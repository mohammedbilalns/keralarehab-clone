import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import AboutUs from "./pages/AboutUs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Donations from "./pages/Donations.jsx";
import Submissions from "./pages/Submissions.jsx";
import MarkdownViewer from "./pages/MarkdowRender.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/donations" element={<Donations />} />
        <Route path="/submissions" element={<Submissions />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/details" element={<MarkdownViewer />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
