import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import AboutUsPage from "./Pages/AboutUsPage";
import ServicesPage from "./Pages/ServicesPage";
import ContactPage from "./Pages/ContactPage";
import Portfolio from "./Pages/Portfolio";
import SaloonSpa from "./Pages/SaloonSpa";
import HomeInteriors from "./Pages/HomeInteriors";
import GymInteriors from "./Pages/GymInteriors";
import ClinicInteriors from "./Pages/ClinicInteriors";
import MiniTheatre from "./Pages/MiniTheatre";
import Construction from "./Pages/Construction";
import RestaurantInterior from "./Pages/RestaurantInterior";
import NotFound from "./Pages/NotFound";
import OfficeInterior from "./Pages/OfficeInterior";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="saloon" element={<SaloonSpa />} />
        <Route path="home-interiors" element={<HomeInteriors />} />
        <Route path="gym-interiors" element={<GymInteriors />} />
        <Route path="clinic-interiors" element={<ClinicInteriors />} />
        <Route path="mini-theatre" element={<MiniTheatre />} />
        <Route path="construction" element={<Construction />} />
        <Route
          path="restaurant-pub-interiors"
          element={<RestaurantInterior />}
        />
        <Route path="office-interiors" element={<OfficeInterior />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}
