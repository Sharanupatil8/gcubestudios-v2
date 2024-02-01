import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import CtaSmall from "../Components/CtaSmall";
import OurServices from "../Components/OurServices";
import Projects from "../Components/Projects";
import WhatsAppButton from "../Components/Whatsapp";

const ServicesPage = () => {
  return (
    <section>
      <section className="w-full banner-small">
        <Navbar />
        <div className="max-w-6xl mx-auto text-center text-white text-3xl md:text-6xl font-bold mt-20 tracking-wide">
          <h2>Services</h2>
        </div>
      </section>

      <OurServices />
      <CtaSmall />
      <Projects />
      <Footer />
      <WhatsAppButton />
    </section>
  );
};

export default ServicesPage;
