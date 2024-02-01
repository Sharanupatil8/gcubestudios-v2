// AboutUsPage.js
import React from "react";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import Footer from "../Components/Footer";
import Testimonials from "../Components/Testimonials";
import CtaSmall from "../Components/CtaSmall";
import WhatsAppButton from "../Components/Whatsapp";

const AboutUsPage = () => {
  return (
    <section>
      <section className="w-full banner-small">
        <Navbar />
        <div className="max-w-6xl mx-auto text-center text-white text-3xl md:text-6xl font-bold mt-20 tracking-wide">
          <h2>About us</h2>
        </div>
      </section>

      <About />
      <CtaSmall />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </section>
  );
};

export default AboutUsPage;
